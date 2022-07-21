import "./scss/style.scss";
import { Route, Routes } from "react-router-dom";
import { Header } from "components/Business/Header/Header";
import { Overlay } from "components/UI/Overlay/Overlay";
import { Item } from "pages/Item/Item";
import { Cart } from "pages/Cart/Cart";
import { useAppSelector } from "hooks/redux";
import { useQuery } from "@apollo/client";
import { FETCH_CATEGORIES } from "apollo/queries/storeAPI";
import { ContentPage } from "pages/Content/ContentPage";
import { ICategory } from "interface/IStore";
import { uid } from "uid";

export const App = () => {
  const { contentOverlay } = useAppSelector((store) => store.store);
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
          <Route path="/item/:id" element={<Item />} />
        </Routes>
        <footer></footer>
      </div>
    </>
  );
};
