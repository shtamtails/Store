import { useQuery } from "@apollo/client";
import { FETCH_PRICE_BY_ID, FETCH_PRODUCT_INFO_BY_ID } from "apollo/queries/storeAPI";
import { Button } from "components/UI/Button/Button";
import { Slider } from "components/UI/Slider/Slider";
import { useGetPriceById } from "hooks/apollo/useGetPriceById";
import { useAppDispatch } from "hooks/redux";
import { CartItems } from "interface/IMiniCartMenu";
import { IPrice, IProduct } from "interface/IStore";
import React from "react";
import { Link } from "react-router-dom";
import { decreaseAmount, increaseAmount } from "store/slices/cart";

export const CartItem: React.FC<CartItems> = ({ id, selectedAttributes, amount }) => {
  const dispatch = useAppDispatch();

  const { data } = useQuery(FETCH_PRODUCT_INFO_BY_ID, {
    variables: {
      id: id,
    },
  });

  const productInfo: IProduct = data?.product;
  const attributes = productInfo?.attributes;
  const { price, currency } = useGetPriceById(id);

  const handleQtyPlusClick = () => {
    dispatch(increaseAmount(id + JSON.stringify(selectedAttributes)));
  };

  const handleQtyMinusClick = () => {
    dispatch(decreaseAmount(id + JSON.stringify(selectedAttributes)));
  };

  console.log(productInfo.gallery);

  return (
    <div className="cart-item-card">
      <div className="cart-item-card-left">
        <Link to={`/item/${productInfo.id}`}>
          <div className="cart-item-card-brand">{productInfo.brand}</div>
          <div className="cart-item-card-name">{productInfo.name}</div>
        </Link>
        <div className="cart-item-card-price">
          {currency} {price}
        </div>
        {attributes?.map((attribute) => (
          <div key={attribute.id} className="cart-item-card-settings">
            {attribute?.name}
            <div className="cart-item-card-buttons">
              {attribute?.type === "text" &&
                attribute?.items.map((el) => (
                  <Button
                    key={el.id}
                    size="sm"
                    type="outline"
                    className="mg-r-sm"
                    color={selectedAttributes[attribute.name] === el.value ? "black" : ""}
                  >
                    {el.displayValue}
                  </Button>
                ))}
              {attribute?.type === "swatch" &&
                attribute?.items.map((el) => (
                  <Button
                    key={el.id}
                    size="xs"
                    type="color"
                    bgcolor={el.value}
                    className="mg-r-sm"
                    height={32}
                    width={32}
                    selected={selectedAttributes[attribute.name] === el.value}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-item-card-right">
        <div className="cart-item-card-qty">
          <Button type="outline" size="sm" height={45} width={45} onClick={handleQtyPlusClick}>
            +
          </Button>
          {amount}
          <Button type="outline" size="sm" height={45} width={45} onClick={handleQtyMinusClick}>
            -
          </Button>
        </div>
        <div className="cart-item-card-image">
          <Slider items={productInfo?.gallery} />
        </div>
      </div>
    </div>
  );
};
