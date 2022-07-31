import { useQuery } from "@apollo/client";
import { FETCH_CATEGORIES } from "apollo/queries/storeAPI";
import { Overlay } from "components/UI/Overlay/Overlay";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ICartProduct } from "interface/ICart";
import { ICategory, IPrice } from "interface/IStore";
import { Cart } from "pages/Cart/CartPage";
import { ContentPage } from "pages/Content/ContentPage";
import { Header } from "pages/Header/Header";
import { ProductPage } from "pages/Product/ProductPage";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { addTotal, resetTotal, setCart } from "store/slices/cart";
import { setCurrency } from "store/slices/settings";
import { uid } from "uid";
import { readFromLocalStorage, writeToLocalStorage } from "utils/localStorage";
import "./scss/style.scss";

export const App = () => {
  const { contentOverlay, currency } = useAppSelector((store) => store.settings);
  const { cart, total } = useAppSelector((store) => store.cart);
  const { data: categoriesData } = useQuery(FETCH_CATEGORIES);
  const dispatch = useAppDispatch();

  // handle cart interactions
  useEffect(() => {
    if (cart?.length > 0) {
      writeToLocalStorage("cart", cart);
      writeToLocalStorage("total", total);
    }
  }, [cart, total]);

  // initialize stored settings/cart items from local storage
  useEffect(() => {
    const storedCart = readFromLocalStorage("cart");
    const storedTotal = readFromLocalStorage("total");
    const currency = readFromLocalStorage("currency");
    currency && dispatch(setCurrency(currency));
    if (storedCart && storedTotal) {
      dispatch(
        setCart({
          cart: storedCart,
          total: storedTotal,
        })
      );
    }
  }, [dispatch]);

  // handle total price and currency change
  useEffect(() => {
    dispatch(resetTotal());
    cart?.map((product: ICartProduct) => {
      const prices = product.prices;
      const amount = product.amount;
      const price = prices.filter((price: IPrice) => price.currency.symbol === currency)[0].amount;
      return dispatch(addTotal(price * amount));
    });
  }, [cart, currency, dispatch]);

  return (
    <>
      <Header />
      <div className="overlay-container">
        <Overlay visible={contentOverlay} />
        <Routes>
          {categoriesData?.categories.map((category: ICategory) => (
            <Route key={uid()} path={`/${category.name}`} element={<ContentPage category={category.name} />} />
          ))}
          <Route path="/" element={<ContentPage category="all" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <footer></footer>
      </div>
    </>
  );
};
