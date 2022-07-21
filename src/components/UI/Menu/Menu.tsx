import { MenuProps } from "interface/UI/IMenu";
import React, { useEffect, useState } from "react";

export const Menu: React.FC<MenuProps> = ({ parentRef, visible, children, offsetLeft, offsetTop, innerRef }) => {
  const parent = parentRef.current;
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const updateSize = () => {
    parent?.offsetLeft ? setX(offsetLeft ? parent.offsetLeft - offsetLeft : parent.offsetLeft) : setX(0);
    parent?.offsetHeight
      ? setY(offsetTop ? parent.offsetTop + parent.offsetHeight + offsetTop : parent.offsetTop + parent.offsetHeight)
      : setY(0);
  };

  useEffect(() => {
    parent && setX(offsetLeft ? parent.offsetLeft - offsetLeft : parent.offsetLeft);
    parent &&
      setY(offsetTop ? parent.offsetTop + parent.offsetHeight + offsetTop : parent.offsetTop + parent.offsetHeight);
    window.addEventListener("resize", updateSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parent]);

  return (
    <div
      ref={innerRef}
      className="menu"
      style={{
        transform: `translate3d(${x}px, ${y}px, 0px)`,
        display: `${visible ? "block" : "none"}`,
      }}
    >
      {children}
    </div>
  );
};
