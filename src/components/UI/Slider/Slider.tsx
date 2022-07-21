import { SliderProps, SliderItems } from "interface/UI/ISlider";
import React, { useState } from "react";
import { Button } from "../Button/Button";

export const Slider: React.FC<SliderProps> = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentDisplayedSlide = items.filter((el: SliderItems) => el.id === currentSlide);

  const handlePlusClick = () => {
    if (currentSlide !== items.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const handleMinusClick = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(items.length - 1);
    }
  };

  return (
    <div className="slider-component">
      <div className="slider-item">
        <img src={currentDisplayedSlide[0].src} alt="" />
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
};
