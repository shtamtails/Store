import React, { Component } from "react";
import Button from "../Button/Button";

interface SliderItems {
  id: number;
  src: string;
}

interface SliderProps {
  items: SliderItems[];
}

interface SliderState {
  currentSlide: number;
}

export default class Slider extends Component<SliderProps, SliderState> {
  constructor(props: SliderProps) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  render() {
    const currentSlide = this.props.items.filter((el) => el.id === this.state.currentSlide);

    const handlePlusClick = () => {
      console.log(this.state.currentSlide);
      if (this.state.currentSlide !== this.props.items.length - 1) {
        this.setState({
          currentSlide: this.state.currentSlide + 1,
        });
      } else {
        this.setState({
          currentSlide: 0,
        });
      }
    };

    const handleMinusClick = () => {
      console.log(this.state.currentSlide);
      if (this.state.currentSlide !== 0) {
        this.setState({
          currentSlide: this.state.currentSlide - 1,
        });
      } else {
        this.setState({
          currentSlide: this.props.items.length - 1,
        });
      }
    };

    return (
      <div className="slider-component">
        <div className="slider-item">
          <img src={currentSlide[0].src} alt="" />
        </div>
        <div className="slider-buttons">
          <Button
            type="primary"
            color="black"
            size="xs"
            onClick={() => {
              handleMinusClick();
            }}
          >
            {" < "}
          </Button>
          <Button
            type="primary"
            color="black"
            size="xs"
            onClick={() => {
              handlePlusClick();
            }}
          >
            {" > "}
          </Button>
        </div>
      </div>
    );
  }
}
