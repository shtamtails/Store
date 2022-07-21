import { Button } from "components/UI/Button/Button";
import { useState } from "react";

export const MiniCartItem: React.FC = () => {
  const [qty, setQty] = useState(1);

  const handleQtyPlusClick = () => {
    setQty(qty + 1);
  };

  const handleQtyMinusClick = () => {
    setQty(qty - 1);
  };

  return (
    <div className="cart-menu-card">
      <div className="cart-menu-card-info">
        <div className="cart-menu-card-name">Apollo Running Short</div>
        <div className="cart-menu-card-price">
          <span>$50.00</span>
        </div>
        <div className="cart-menu-card-setting">
          Size:
          <div className="cart-menu-card-setting-buttons">
            <div className="card-setting-button">
              <Button size="xs" type="outline" color="black">
                XS
              </Button>
            </div>
            <div className="card-setting-button">
              <Button size="xs" type="outline">
                s
              </Button>
            </div>
            <div className="card-setting-button">
              <Button size="xs" type="outline">
                m
              </Button>
            </div>
            <div className="card-setting-button">
              <Button size="xs" type="outline">
                l
              </Button>
            </div>
          </div>
        </div>
        <div className="cart-menu-card-setting">
          Color:
          <div className="cart-menu-card-setting-buttons">
            <div className="card-setting-button">
              <Button size="xs" type="color" bgcolor="#D3D2D5" selected />
            </div>
            <div className="card-setting-button">
              <Button size="xs" type="color" bgcolor="black" />
            </div>
            <div className="card-setting-button">
              <Button size="xs" type="color" bgcolor="white" />
            </div>
          </div>
        </div>
      </div>
      <div className="cart-menu-qty-controls">
        <Button
          size="xs"
          type="outline"
          onClick={() => {
            handleQtyPlusClick();
          }}
        >
          +
        </Button>
        <div className="cart-menu-qty-controls-qty">{qty}</div>
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
      <div className="cart-menu-card-image">
        <img src="https://shop-cdn1.vigbo.tech/shops/2721/products/18272474/images/3-48f82d6fdf0d3a782469d038fea5688a.jpg" />
      </div>
    </div>
  );
};
