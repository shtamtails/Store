import Button from "components/UI/Button/Button";
import { Component } from "react";

interface ItemCardProps {}

interface ItemCardState {
  selectedSize: string;
  selectedColor: string;
  qty: number;
}

export default class ItemCard extends Component<ItemCardProps, ItemCardState> {
  // ! USE GLOBAL REDUX STATE INSTEAD OF LOCAL STATE

  constructor(props: ItemCardProps) {
    super(props);
    this.state = {
      selectedSize: "M",
      selectedColor: "#ffffff",
      qty: 1,
    };
  }

  handleQtyPlusClick() {
    this.setState({
      qty: this.state.qty + 1,
    });
  }

  handleQtyMinusClick() {
    this.setState({
      qty: this.state.qty - 1,
    });
  }

  render() {
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
                <Button size="xs" type="outline" color={this.state.selectedSize === "XS" ? "black" : ""}>
                  XS
                </Button>
              </div>
              <div className="card-setting-button">
                <Button size="xs" type="outline" color={this.state.selectedSize === "S" ? "black" : ""}>
                  s
                </Button>
              </div>
              <div className="card-setting-button">
                <Button size="xs" type="outline" color={this.state.selectedSize === "M" ? "black" : ""}>
                  m
                </Button>
              </div>
              <div className="card-setting-button">
                <Button size="xs" type="outline" color={this.state.selectedSize === "L" ? "black" : ""}>
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
              this.handleQtyPlusClick();
            }}
          >
            +
          </Button>
          <div className="cart-menu-qty-controls-qty">{this.state.qty}</div>
          <Button
            size="xs"
            type="outline"
            onClick={() => {
              this.handleQtyMinusClick();
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
  }
}
