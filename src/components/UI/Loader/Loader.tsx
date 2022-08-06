import React, { memo } from "react";

interface LoaderProps {
  color?: string;
  size?: number;
  thickness?: number;
}

export const Loader: React.FC<LoaderProps> = memo(({ color, size, thickness }) => {
  return (
    <div
      className="loader"
      style={{
        borderColor: `${color} ${color} transparent transparent` || `#fff #fff transparent transparent`,
        borderBottomColor: "transparent",
        width: size,
        height: size,
        borderWidth: thickness,
      }}
    ></div>
  );
});
