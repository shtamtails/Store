import { Cart } from "components/Icons/Cart";
import React from "react";

interface IContentCard {
  image: string;
}

export const ContentCard: React.FC<IContentCard> = ({ image }) => {
  return (
    <div className="content-card">
      <div className="content-card-image">
        <img src={image} alt="" />
      </div>
      <div className="content-card-cart-btn">
        <Cart color="#fff" />
      </div>
      <div className="content-card-info">
        <div className="content-card-title">Apollo Running Short</div>
        <div className="content-card-price">$50.00</div>
      </div>
    </div>
  );
};
