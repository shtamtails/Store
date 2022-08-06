import { CheckoutModal } from "components/Business/Modals/Checkout/CheckoutModal";
import { CartProduct } from "components/Business/ProductCard/CartProduct";
import { Button } from "components/UI/Button/Button";
import { Modal } from "components/UI/Modal/Modal";
import { useAppSelector } from "hooks/redux";
import { useClickOutside } from "hooks/useClickOutside";
import { ICartProduct } from "interface/ICart";
import { memo, useRef, useState } from "react";

export const Cart: React.FC = memo(() => {
  const { cart, total } = useAppSelector((store) => store.cart);
  const { currency } = useAppSelector((store) => store.settings);
  const taxAmount = total ? Math.floor(total * 0.21 * 100) / 100 : 0;
  const totalPrice = (total + taxAmount).toFixed(2);

  const [checkout, setCheckout] = useState<boolean>(false);
  const handleCheckout = () => {
    cart.length > 0 && setCheckout(true);
  };

  const checkoutRef = useRef(null);

  useClickOutside(checkoutRef, () => {
    setCheckout(false);
  });

  return (
    <>
      <div className="container">
        <div className="section-title">
          <span>Cart</span>
        </div>
        <div className="cart-items">
          {cart?.map((product: ICartProduct) => (
            <CartProduct
              key={product.orderId}
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
          <Button size="sm" type="primary" color="green" fullWidth className="mg-t-sm" onClick={handleCheckout}>
            Order
          </Button>
        </div>
      </div>
      <Modal
        width="800px"
        visible={checkout}
        setVisible={setCheckout}
        title="Checkout"
        content={<CheckoutModal />}
        innerRef={checkoutRef}
      />
    </>
  );
});
