import React from "react";

interface OverlayProps {
  visible: boolean;
  children?: string | JSX.Element;
}

export const Overlay: React.FC<OverlayProps> = ({ visible, children }) => {
  return <>{visible && <div className="overlay">{children}</div>}</>;
};
