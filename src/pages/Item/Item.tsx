import Button from "components/UI/Button/Button";
import React, { Component } from "react";

interface ItemProps {}

interface ItemState {
  currentImage: number;
}

export default class Item extends Component<ItemProps, ItemState> {
  constructor(props: ItemProps) {
    super(props);
    this.state = {
      currentImage: 0,
    };
  }

  handleSmallImageClick = (id: number) => {
    this.setState({
      currentImage: id,
    });
  };

  render() {
    const items = [
      {
        id: 0,
        src: "https://sun9-88.userapi.com/impf/-jaAiUeUc76De2Mazp1jxHrtdIS1dV7aVnUn4g/2YZdmu0m4FY.jpg?size=354x330&quality=96&sign=205bb7da4f68dfd4974784388ff3b5f6&type=album",
      },
      {
        id: 1,
        src: "https://sun9-40.userapi.com/impf/MPEsMaTIVHg5u8LBm6l9AR8cjW9mtiLG0245ZA/Yzn4TulRE7w.jpg?size=354x330&quality=96&sign=f9ac7c03cbc7121004e2c3c77c45b217&type=album",
      },
      {
        id: 2,
        src: "https://sun9-77.userapi.com/impf/o-XIiOiw4h1bfAlB1mF65AawJaPMk5ETHFZEDQ/8r4c-GlTrzs.jpg?size=354x330&quality=96&sign=e034032e71bf60086779fd85549b7e1b&type=album",
      },
      {
        id: 3,
        src: "https://sun9-80.userapi.com/impf/0hWGKhyTQAiPrlBPPYZje1WSEZTRoptI-vZqSg/fL2DkCNDuH4.jpg?size=354x330&quality=96&sign=54ea3d30e9a46140e0cd105e897cd049&type=album",
      },
    ];

    return (
      <div className="container">
        <div className="item">
          <div className="item-images">
            <div className="item-images-small">
              {items.map((el) => (
                <>
                  <div className="item-images-small-image">
                    <img
                      key={el.id}
                      src={el.src}
                      alt=""
                      onClick={() => {
                        this.handleSmallImageClick(el.id);
                      }}
                    />
                  </div>
                </>
              ))}
            </div>
            <div className="item-images-full">
              <img src={items[this.state.currentImage].src} alt="" />
            </div>
          </div>
          <div className="item-info">
            <div className="item-info-title">Apollo</div>
            <div className="item-info-name">Running Short</div>
            <div className="item-info-setting-container">
              SIZE:
              <div className="item-info-setting-content">
                <Button size="sm" type="outline" className="mg-r-sm">
                  XS
                </Button>
                <Button size="sm" type="outline" color="black" className="mg-r-sm">
                  S
                </Button>
                <Button size="sm" type="outline" className="mg-r-sm">
                  M
                </Button>
                <Button size="sm" type="outline" className="mg-r-sm">
                  L
                </Button>
              </div>
            </div>

            <div className="item-info-setting-container">
              COLOR:
              <div className="item-info-setting-content">
                <Button size="sm" type="color" bgcolor="#0F6450" className="mg-r-sm" height={32} width={32} selected />
                <Button size="sm" type="color" bgcolor="#2B2B2B" className="mg-r-sm" height={32} width={32} />
                <Button size="sm" type="color" bgcolor="#D3D2D5" className="mg-r-sm" height={32} width={32} />
              </div>
            </div>

            <div className="item-info-price">
              PRICE:
              <div className="item-info-price-total">$50.00</div>
            </div>
            <div className="item-info-checkout">
              <Button type="primary" color="green" size="md" fullWidth>
                ADD TO CART
              </Button>
            </div>
            <div className="item-info-description">
              Find stunning women's cocktails dresses and party dresses. Stand out in lace and metallic cocktail dresses
              and pary dresses from all your favourite brands.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
