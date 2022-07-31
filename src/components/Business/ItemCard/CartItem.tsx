import { useQuery } from "@apollo/client";
import { FETCH_PRICE_BY_ID, FETCH_PRODUCT_INFO_BY_ID } from "apollo/queries/storeAPI";
import { Button } from "components/UI/Button/Button";
import { Loader } from "components/UI/Loader/Loader";
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

  const { data, loading } = useQuery(FETCH_PRODUCT_INFO_BY_ID, {
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

  return (
    <>
      <div className="cart-item-card">
        {loading ? (
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}
          >
            <Loader size={200} thickness={13} color="#eaeaea" />
          </div>
        ) : (
          <>
            <div className="cart-item-card-left">
              <Link to={`/item/${productInfo?.id}`}>
                <div className="cart-item-card-brand">{productInfo?.brand}</div>
                <div className="cart-item-card-name">{productInfo?.name}</div>
              </Link>
              <div className="cart-item-card-price">
                {currency} {price}
              </div>
              {attributes?.map((attribute) => {
                console.log(attribute);
                console.log(attribute.items);
                return (
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
                            height="24px"
                            width="24px"
                            selected={selectedAttributes[attribute.name] === el.value}
                          />
                        ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart-item-card-right">
              <div className="cart-item-card-qty">
                <Button type="outline" size="sm" height="24px" width="24px" onClick={handleQtyPlusClick}>
                  +
                </Button>
                {amount}
                <Button type="outline" size="sm" height="24px" width="24px" onClick={handleQtyMinusClick}>
                  -
                </Button>
              </div>
              <div className="cart-item-card-image">
                <Slider items={productInfo?.gallery} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
