import { ActionIconProps } from "interface/UI/IActionIcon";
import React from "react";

export const ActionIcon: React.FC<ActionIconProps> = ({ innerRef, onClick, children, type, radius }) => {
  let className = "action-icon";
  type && (className += ` action-icon-${type}`);
  radius && (className += ` action-icon-radius-${radius}`);
  className = className.trim().replace(/\s\s+/g, " ");
  return (
    <div
      ref={innerRef}
      className={className}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </div>
  );
};
