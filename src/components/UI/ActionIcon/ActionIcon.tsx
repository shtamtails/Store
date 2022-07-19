import React from "react";

interface ActionIconProps {
  innerRef?: React.RefObject<HTMLDivElement>;
  onClick?: Function;
  children: JSX.Element | string;
  type?: "hover" | "outline";
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
}

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
