import { CartProduct } from "components/Business/ProductCard/CartProduct";
import { Button } from "components/UI/Button/Button";
import { useAppSelector } from "hooks/redux";
import { ICartProduct } from "interface/ICart";

export const Cart: React.FC = () => {
  const { cart, total } = useAppSelector((store) => store.cart);
  const { currency } = useAppSelector((store) => store.settings);
  const taxAmount = total ? Math.floor(total * 0.21 * 100) / 100 : 0;
  const totalPrice = (total + taxAmount).toFixed(2);

  return (
    <>
      <div className="container">
        <div className="section-title">
          <span>Cart</span>
        </div>
        <div className="cart-items">
          {}
          {cart.map((product: ICartProduct) => (
            <CartProduct
              key={product.orderId}
              id={product.id}
              selectedAttributes={product.attributes}
              amount={product.amount}
            />
          ))}
        </div>
        <div className="cart-footer">
          <div className="cart-footer-section">
            <div className="cart-footer-section-label">Tax 21%:</div>
            <div className="cart-footer-section-info">
              {currency} {taxAmount}
            </div>
          </div>
          <div className="cart-footer-section">
            <div className="cart-footer-section-label">Quantity:</div>
            <div className="cart-footer-section-info">{cart.length}</div>
          </div>
          <div className="cart-footer-section">
            <div className="cart-footer-section-label">Total:</div>
            <div className="cart-footer-section-info">
              {currency} {totalPrice}
            </div>
          </div>
          <Button size="sm" type="primary" color="green" fullWidth className="mg-t-sm">
            Order
          </Button>
        </div>
      </div>
    </>
  );
};
