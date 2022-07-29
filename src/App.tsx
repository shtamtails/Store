import { useQuery } from "@apollo/client";
import { FETCH_CATEGORIES } from "apollo/queries/storeAPI";
import { Overlay } from "components/UI/Overlay/Overlay";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ICategory } from "interface/IStore";
import { Cart } from "pages/Cart/CartPage";
import { ContentPage } from "pages/Content/ContentPage";
import { Header } from "pages/Header/Header";
import { ProductPage } from "pages/Product/ProductPage";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { setCart } from "store/slices/cart";
import { uid } from "uid";
import { readFromLocalStorage, writeToLocalStorage } from "utils/localStorage";
import "./scss/style.scss";

export const App = () => {
  const { contentOverlay } = useAppSelector((store) => store.storeParams);
  const { cart, total } = useAppSelector((store) => store.cart);
  const { data: categoriesData } = useQuery(FETCH_CATEGORIES);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cart.length > 0) {
      writeToLocalStorage("cart", cart);
      writeToLocalStorage("total", total);
    }
  }, [cart, total]);

  useEffect(() => {
    const storedCart = readFromLocalStorage("cart");
    const storedTotal = readFromLocalStorage("total");
    dispatch(
      setCart({
        cart: storedCart,
        total: storedTotal,
      })
    );
  }, [dispatch]);

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
          <Route path="/item/:id" element={<ProductPage />} />
        </Routes>
        <footer></footer>
      </div>
    </>
  );
};
