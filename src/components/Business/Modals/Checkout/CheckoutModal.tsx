import { Button } from "components/UI/Button/Button";
import { Input } from "components/UI/Input/Input";
import { useAppSelector } from "hooks/redux";

export const CheckoutModal = () => {
  const { total } = useAppSelector((store) => store.cart);
  const { currency } = useAppSelector((store) => store.settings);
  const taxAmount = total ? Math.floor(total * 0.21 * 100) / 100 : 0;
  const totalPrice = (total + taxAmount).toFixed(2);

  return (
    <>
      <div className="checkout-modal">
        <div className="checkout-info-form">
          <form>
            <div className="checkout-double-input">
              <Input label="First Name" maxWidth className="mg-r-xs" height="35px" required />
              <Input label="Last Name" maxWidth className="mg-l-xs" height="35px" required />
            </div>
            <div className="checkout-single-input">
              <Input label="Email" maxWidth height="35px" required />
            </div>
            <div className="checkout-single-input">
              <Input label="Street Adress" maxWidth height="35px" required />
            </div>
            <div className="checkout-double-input">
              <Input label="State/Province" maxWidth className="mg-r-xs" height="35px" required />
              <Input label="City" maxWidth className="mg-l-xs" height="35px" required />
            </div>
            <div className="checkout-double-input">
              <Input label="Zip/Postal code" maxWidth className="mg-r-xs" height="35px" required />
              <Input label="Phone" maxWidth className="mg-l-xs" height="35px" required />
            </div>
          </form>
        </div>
        <div className="checkout-general">
          <div className="checkout-card">
            <div className="checkout-general-label">Payment Method</div>
            <div className="checkout-single-input">
              <Input placeholder="Card Number" height="35px" maxWidth />
            </div>
            <div className="checkout-single-input">
              <Input placeholder="Name on card" height="35px" maxWidth />
            </div>
            <div className="checkout-double-input">
              <Input placeholder="Exp. date (MM/YY)" maxWidth height="35px" className="pd-r-xs" />
              <Input placeholder="Secure Code" maxWidth height="35px" className="pd-l-xs" />
            </div>
            <div className="mg-v-sm flex jcc">OR</div>
            <div className="checkout-alternate">
              <img src="https://developer.apple.com/design/human-interface-guidelines/technologies/apple-pay/images/ApplePayMarkWithPaymentOptions_2x.png" />
            </div>
          </div>

          <div className="checkout-complete">
            <Button fullWidth color="green" type="primary" size="sm" className="mg-b-sm">
              <>
                {currency}
                {totalPrice} Pay
              </>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
