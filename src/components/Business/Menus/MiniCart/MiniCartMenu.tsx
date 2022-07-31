import { Button } from "components/UI/Button/Button";
import { useAppSelector } from "hooks/redux";
import { ICartProduct } from "interface/ICart";
import { MiniCartMenuProps } from "interface/IMiniCartMenu";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { uid } from "uid";
import { getTotalAmount } from "utils/getTotalAmount";
import { MinicartProduct } from "./MinicartProduct";

export const MinicartMenu: React.FC<MiniCartMenuProps> = ({ onClose }) => {
  const { cart, total } = useAppSelector((store) => store.cart);
  const { currency } = useAppSelector((store) => store.settings);

  const totalAmount = useMemo(() => getTotalAmount(cart), [cart]);
  const totalPrice = `${currency} ${Math.floor(total * 100) / 100}`;

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
          <div className="cart-menu-footer-total-price">{totalPrice}</div>
        </div>
        <div className="cart-menu-footer-buttons">
          <Link to="/cart">
            <Button
              size="sm"
              type="outline"
              fullWidth
              className="mg-r-xs"
              onClick={() => {
                onClose && onClose();
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
                onClose && onClose();
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
