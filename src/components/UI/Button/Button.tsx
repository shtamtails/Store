import { ButtonProps } from "interface/UI/IButton";
import React from "react";

export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  type,
  size,
  fullWidth,
  onClick,
  className,
  bgcolor,
  selected,
  height,
  width,
}) => {
  let tempClassName = ``;
  type && (tempClassName += ` btn-${type} `);
  color && (tempClassName += ` ${color} `);
  size && (tempClassName += ` btn-${size} `);
  fullWidth && (tempClassName += " fullwidth ");
  className && (tempClassName += ` ${className} `);
  selected && (tempClassName += ` btn-selected `);
  bgcolor && bgcolor === "#FFFFFF" && (tempClassName += " btn-color-white ");
  tempClassName = tempClassName.trim().replace(/\s\s+/g, " ");

  return (
    <button
      className={tempClassName}
      onClick={() => {
        onClick && onClick();
      }}
      style={{
        backgroundColor: bgcolor && bgcolor,
        height: height && `${height}px`,
        width: width && `${width}px`,
      }}
    >
      {children}
    </button>
  );
};
