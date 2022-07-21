import { Cart } from "components/UI/Icons/Cart";
import { useGetPriceById } from "hooks/apollo/useGetPriceById";
import { useAppSelector } from "hooks/redux";
import { IPrevewItemCard } from "interface/IPreviewItemCard";
import React from "react";

export const PreviewItem: React.FC<IPrevewItemCard> = ({ id, image, brand, name }) => {
  const { currency } = useAppSelector((store) => store.storeParams);
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
