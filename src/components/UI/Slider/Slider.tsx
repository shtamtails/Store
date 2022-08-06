import React, { memo, useState } from "react";
import { Button } from "../Button/Button";

interface SliderProps {
  items: string[];
}

export const Slider: React.FC<SliderProps> = memo(({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      <div className="slider-item">{items && <img src={items[currentSlide]} alt="" />}</div>
      {items.length > 1 && (
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
      )}
    </div>
  );
});
