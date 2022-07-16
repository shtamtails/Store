import React, { Component } from "react";

interface IMenu {
  parentRef: React.RefObject<HTMLDivElement>;
  visible: boolean;
  children: JSX.Element;
  x?: number;
  y?: number;
  z?: number;
}

interface IMenuProps {
  x: number;
  y: number;
  z: number;
}

export default class Menu extends Component<IMenu, IMenuProps> {
  constructor(props: IMenu) {
    super(props);
    const parent = this.props.parentRef.current;
    this.state = {
      x: this.props.x || (parent?.offsetLeft && parent?.offsetLeft - 25) || 0,
      y: this.props.y || (parent?.offsetTop && parent?.offsetTop + parent?.offsetHeight) || 0,
      z: this.props.z || 0,
    };

    const updateSize = () => {
      this.setState({
        x: (parent?.offsetLeft && parent?.offsetLeft - 25) || 0,
        y: (parent?.offsetHeight && parent?.offsetTop + parent?.offsetHeight) || 0,
        z: 0,
      });
    };

    window.addEventListener("resize", updateSize);
  }

  componentDidMount() {
    const parent = this.props.parentRef.current;
    this.setState({
      x: (parent?.offsetLeft && parent?.offsetLeft - 25) || 0,
      y: (parent?.offsetHeight && parent?.offsetTop + parent?.offsetHeight) || 0,
      z: 0,
    });
  }

  render() {
    return (
      <div
        className="menu"
        style={{
          transform: `translate3d(${this.state.x}px, ${this.state.y}px, ${this.state.z}px)`,
          display: `${this.props.visible ? "block" : "none"}`,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
