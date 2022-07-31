import { Button } from "components/UI/Button/Button";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ICartItem } from "interface/ICart";
import { MiniCartMenuProps } from "interface/IMiniCartMenu";
import { IPrice } from "interface/IStore";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { addTotal, resetTotal } from "store/slices/cart";
import { uid } from "uid";
import { getTotalAmount } from "utils/getTotalAmount";
import { MiniCartItem } from "./MiniCartItem";

export const MiniCartMenu: React.FC<MiniCartMenuProps> = ({ onClose }) => {
  const { cart, total } = useAppSelector((store) => store.cart);
  const { currency } = useAppSelector((store) => store.storeParams);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetTotal());
    cart?.map((item: ICartItem) => {
      const prices = item.prices;
      const amount = item.amount;
      const price = prices.filter((price: IPrice) => price.currency.symbol === currency)[0].amount;
      dispatch(addTotal(price * amount));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, currency]);

  const totalSum = `${currency} ${Math.floor(total * 100) / 100}`;
  const totalAmount = useMemo(() => getTotalAmount(cart), [cart]);

  return (
    <div className="cart-menu">
      <div className="cart-menu-header">
        <span>My Bag</span>, {totalAmount} items
      </div>
      <div className="cart-menu-items">
        {cart?.map((item: ICartItem) => (
          <MiniCartItem
            key={item.id + uid()}
            id={item.id}
            selectedAttributes={item.selectedAttributes}
            amount={item.amount}
            name={item.name}
            gallery={item.gallery}
            attributes={item.attributes}
            brand={item.brand}
          />
        ))}
      </div>
      <div className="cart-menu-footer">
        <div className="cart-menu-footer-total">
          <div className="cart-menu-footer-total-text">Total</div>
          <div className="cart-menu-footer-total-price">{totalSum}</div>
        </div>
        <div className="cart-menu-footer-buttons">
          <Link to="/cart">
            <Button
              size="sm"
              type="outline"
              fullWidth
              className="mg-r-xs"
              onClick={() => {
                onClose();
              }}
            >
              View bag
            </Button>
          </Link>
          <Link to="/cart">
            <Button
              size="sm"
              color="green"
              type="primary"
              fullWidth
              className="mg-l-xs"
              onClick={() => {
                onClose();
              }}
            >
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
