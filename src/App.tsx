import { useQuery } from "@apollo/client";
import { FETCH_CATEGORIES } from "apollo/queries/storeAPI";
import { Overlay } from "components/UI/Overlay/Overlay";
import { useAppSelector } from "hooks/redux";
import { ICategory } from "interface/IStore";
import { Cart } from "pages/Cart/CartPage";
import { ContentPage } from "pages/Content/ContentPage";
import { Header } from "pages/Header/Header";
import { ProductPage } from "pages/Product/ProductPage";
import { Routes, Route } from "react-router-dom";
import { uid } from "uid";
import "./scss/style.scss";

export const App = () => {
  const { contentOverlay } = useAppSelector((store) => store.storeParams);
  const { data: categoriesData } = useQuery(FETCH_CATEGORIES);

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
