import { memo } from "react";

interface ButtonProps {
  children?: string | JSX.Element;
  color?: "green" | "black" | "";
  type?: "primary" | "outline" | "color";
  size?: "xs" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
  bgcolor?: string;
  selected?: boolean;
  height?: string;
  width?: string;
}

export const Button: React.FC<ButtonProps> = memo(
  ({ children, color, type, size, fullWidth, onClick, className, bgcolor, selected, height, width }) => {
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
          height: height && width,
          width: width && width,
        }}
      >
        {children}
      </button>
    );
  }
);
