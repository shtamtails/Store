import React from "react";

export const clickOutsideHandler = (ref: React.RefObject<HTMLDivElement>, callback: Function) => {
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
};
