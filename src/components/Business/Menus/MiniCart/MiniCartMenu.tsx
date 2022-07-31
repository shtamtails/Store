import { Button } from "components/UI/Button/Button";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ICartProduct } from "interface/ICart";
import { MiniCartMenuProps } from "interface/IMiniCartMenu";
import { IPrice } from "interface/IStore";
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { addTotal, resetTotal } from "store/slices/cart";
import { uid } from "uid";
import { getTotalAmount } from "utils/getTotalAmount";
import { MinicartProduct } from "./MinicartProduct";

export const MinicartMenu: React.FC<MiniCartMenuProps> = ({ onClose }) => {
  const { cart, total } = useAppSelector((store) => store.cart);
  const { currency } = useAppSelector((store) => store.settings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetTotal());
    cart?.map((product: ICartProduct) => {
      const prices = product.prices;
      const amount = product.amount;
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
        <span>My Bag</span>, {totalAmount} products
      </div>
      <div className="cart-menu-items">
        {cart?.map((product: ICartProduct) => (
          <MinicartProduct
            key={product.id + uid()}
            id={product.id}
            selectedAttributes={product.selectedAttributes}
            amount={product.amount}
            name={product.name}
            gallery={product.gallery}
            attributes={product.attributes}
            brand={product.brand}
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
