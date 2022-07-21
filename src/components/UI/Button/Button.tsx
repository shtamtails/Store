import React from "react";

interface ButtonProps {
  children?: string | JSX.Element;
  color?: "green" | "black" | "";
  type?: "primary" | "outline" | "color";
  size?: "xs" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: Function;
  className?: string;
  bgcolor?: string;
  selected?: boolean;
  height?: number;
  width?: number;
}

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
