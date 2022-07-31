import { useQuery } from "@apollo/client";
import { FETCH_PRODUCT_INFO_BY_ID } from "apollo/queries/storeAPI";
import { Button } from "components/UI/Button/Button";
import { useGetPriceById } from "hooks/apollo/useGetPriceById";
import { useAppDispatch } from "hooks/redux";
import { ICartItem, IMiniCartProduct } from "interface/ICart";
import { CartItems } from "interface/IMiniCartMenu";
import { IProduct } from "interface/IStore";
import { useEffect } from "react";
import { decreaseAmount, increaseAmount } from "store/slices/cart";

export const MiniCartItem: React.FC<IMiniCartProduct> = ({
  id,
  selectedAttributes,
  amount,
  name,
  gallery,
  attributes,
  brand,
}) => {
  const dispatch = useAppDispatch();

  const { price, currency } = useGetPriceById(id);

  const handleQtyPlusClick = () => {
    dispatch(increaseAmount(id + JSON.stringify(selectedAttributes)));
  };

  const handleQtyMinusClick = () => {
    dispatch(decreaseAmount(id + JSON.stringify(selectedAttributes)));
  };

  return (
    <div className="cart-menu-card">
      <div className="cart-menu-card-info">
        <div className="cart-menu-card-name">
          {brand} {name}
        </div>
        <div className="cart-menu-card-price">
          <span>
            {currency} {price}
          </span>
        </div>
        {attributes?.map((attribute) => (
          <div key={attribute.id} className="cart-menu-card-setting">
            {attribute?.name}
            <div className="cart-menu-card-setting-buttons">
              {attribute?.type === "text" &&
                attribute?.items.map((el) => (
                  <Button
                    key={el.id}
                    type="outline"
                    className="mg-r-sm "
                    color={selectedAttributes[attribute.name] === el.value ? "black" : ""}
                    height="24px"
                  >
                    {el.value}
                  </Button>
                ))}

              {attribute?.type === "swatch" &&
                attribute?.items.map((el) => (
                  <Button
                    key={el.id}
                    size="sm"
                    type="color"
                    className="mg-r-sm"
                    bgcolor={el.value}
                    selected={selectedAttributes[attribute.name] === el.value}
                    width="16px"
                    height="16px"
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="minicart-right-section">
        <div className="minicart-qty-controls">
          <Button
            size="xs"
            type="outline"
            onClick={() => {
              handleQtyPlusClick();
            }}
          >
            +
          </Button>
          <div className="minicart-qty">{amount}</div>
          <Button
            size="xs"
            type="outline"
            onClick={() => {
              handleQtyMinusClick();
            }}
          >
            -
          </Button>
        </div>
        <div className="minicart-image">
          <img src={gallery[0]} alt={name} />
        </div>
      </div>
    </div>
  );
};
