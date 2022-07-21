import { Button } from "components/UI/Button/Button";
import { Slider } from "components/UI/Slider/Slider";

export const CartItem = () => {
  const items = [
    {
      id: 0,
      src: "https://media.self.com/photos/61b79277ad63723a264a0c75/1:1/w_1000,h_1000,c_limit/Madewell%20Somervell%20Modern%20Cable%20Turtleneck%20Sweater.jpg",
    },
    {
      id: 1,
      src: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/445580/item/ingoods_66_445580.jpg?width=1008&impolicy=quality_75",
    },
    {
      id: 2,
      src: "https://shop-cdn1.vigbo.tech/shops/2721/products/18272474/images/3-48f82d6fdf0d3a782469d038fea5688a.jpg",
    },
  ];
  return (
    <div className="cart-item-card">
      <div className="cart-item-card-left">
        <div className="cart-item-card-brand">Apollo</div>
        <div className="cart-item-card-name">Running Short</div>
        <div className="cart-item-card-price">$50.00</div>
        <div className="cart-item-card-settings">
          SIZE:
          <div className="cart-item-card-buttons">
            <Button size="sm" type="outline" className="mg-r-sm">
              XS
            </Button>
            <Button size="sm" type="outline" color="black" className="mg-r-sm">
              s
            </Button>
            <Button size="sm" type="outline" className="mg-r-sm">
              M
            </Button>
            <Button size="sm" type="outline" className="mg-r-sm">
              L
            </Button>
          </div>
        </div>
        <div className="cart-item-card-settings">
          COLOR:
          <div className="cart-item-card-buttons">
            <Button size="xs" type="color" className="mg-r-sm" bgcolor="#d3d2d5" height={32} width={32} />
            <Button size="xs" type="color" className="mg-r-sm" bgcolor="black" height={32} width={32} />
            <Button size="xs" type="color" className="mg-r-sm" bgcolor="white" height={32} width={32} />
            <Button size="xs" type="color" className="mg-r-sm" bgcolor="#0F6450" selected height={32} width={32} />
          </div>
        </div>
      </div>
      <div className="cart-item-card-right">
        <div className="cart-item-card-qty">
          <Button type="outline" size="sm" height={45} width={45}>
            +
          </Button>
          1
          <Button type="outline" size="sm" height={45} width={45}>
            -
          </Button>
        </div>
        <div className="cart-item-card-image">
          <Slider items={items} />
        </div>
      </div>
    </div>
  );
};
