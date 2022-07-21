import { Button } from "components/UI/Button/Button";
import React from "react";
import { Link } from "react-router-dom";
import { MiniCartItem } from "./MiniCartItem";

interface CartMenuProps {
  onClose: Function;
}

export const MiniCartMenu: React.FC<CartMenuProps> = ({ onClose }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu-header">
        <span>My Bag</span>, 0 items
      </div>
      <div className="cart-menu-items">
        <MiniCartItem />
        <MiniCartItem />
      </div>
      <div className="cart-menu-footer">
        <div className="cart-menu-footer-total">
          <div className="cart-menu-footer-total-text">Total</div>
          <div className="cart-menu-footer-total-price">$200.00</div>
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
