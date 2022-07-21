import { CartItem } from "components/Business/ItemCard/CartItem";
import { Button } from "components/UI/Button/Button";

export const Cart: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="section-title">
          <span>Cart</span>
        </div>
        <div className="cart-items">
          <CartItem />
          <CartItem />
        </div>
        <div className="cart-footer">
          <div className="cart-footer-section">
            <div className="cart-footer-section-label">Tax 21%:</div>
            <div className="cart-footer-section-info">$42.00</div>
          </div>
          <div className="cart-footer-section">
            <div className="cart-footer-section-label">Quantity:</div>
            <div className="cart-footer-section-info">3</div>
          </div>
          <div className="cart-footer-section">
            <div className="cart-footer-section-label">Total:</div>
            <div className="cart-footer-section-info">$200.00</div>
          </div>
          <Button size="sm" type="primary" color="green" fullWidth className="mg-t-sm">
            Order
          </Button>
        </div>
      </div>
    </>
  );
};
