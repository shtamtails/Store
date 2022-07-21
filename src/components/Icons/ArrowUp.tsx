import { IconInterface } from "interface/IIcon";
import React from "react";

export const ArrowUp: React.FC<IconInterface> = ({ color }) => {
  return (
    <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 3.5L4 0.5L1 3.5" stroke={color ? color : "black"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
