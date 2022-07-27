import { Button } from "components/UI/Button/Button";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ICartItems } from "interface/ICart";
import { MiniCartMenuProps } from "interface/IMiniCartMenu";
import { IPrice } from "interface/IStore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addTotal, resetTotal } from "store/slices/cart";
import { uid } from "uid";
import { MiniCartItem } from "./MiniCartItem";

export const MiniCartMenu: React.FC<MiniCartMenuProps> = ({ onClose }) => {
  const { cart, total } = useAppSelector((store) => store.cart);
  const { currency } = useAppSelector((store) => store.storeParams);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetTotal());
    cart.map((item: ICartItems) => {
      const prices = item.price;
      const amount = item.amount;
      const price = prices.filter((price: IPrice) => price.currency.symbol === currency)[0].amount;
      dispatch(addTotal(price * amount));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, currency]);

  return (
    <div className="cart-menu">
      <div className="cart-menu-header">
        <span>My Bag</span>, {cart.length} items
      </div>
      <div className="cart-menu-items">
        {cart?.map((item: ICartItems) => (
          <MiniCartItem key={item.id + uid()} id={item.id} selectedAttributes={item.attributes} amount={item.amount} />
        ))}
      </div>
      <div className="cart-menu-footer">
        <div className="cart-menu-footer-total">
          <div className="cart-menu-footer-total-text">Total</div>
          <div className="cart-menu-footer-total-price">
            {currency} {total}
          </div>
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
