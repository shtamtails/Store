import { OverlayProps } from "interface/UI/IOverlay";
import React from "react";

export const Overlay: React.FC<OverlayProps> = ({ visible, children }) => {
  return <>{visible && <div className="overlay">{children}</div>}</>;
};
