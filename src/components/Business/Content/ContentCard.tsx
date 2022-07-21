import { Cart } from "components/Icons/Cart";
import { useGetPriceById } from "hooks/apollo/getPriceById";
import { useAppSelector } from "hooks/redux";
import { IPrice } from "interface/IStore";
import React from "react";

interface IContentCard {
  id: string;
  image: string;
  brand: string;
  name: string;
}

export const ContentCard: React.FC<IContentCard> = ({ id, image, brand, name }) => {
  const { currency } = useAppSelector((store) => store.store);
  const { price } = useGetPriceById(id);

  return (
    <div className="content-card">
      <div className="content-card-image">
        <img src={image} alt="" />
      </div>
      <div className="content-card-cart-btn">
        <Cart color="#fff" />
      </div>
      <div className="content-card-info">
        <div className="content-card-title">
          {brand} {name}
        </div>
        <div className="content-card-price">
          {currency} {price}
        </div>
      </div>
    </div>
  );
};
