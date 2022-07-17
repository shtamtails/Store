import React, { Component } from "react";

interface IMenuProps {
  parentRef: React.RefObject<HTMLDivElement>;
  visible: boolean;
  children: JSX.Element;
  offsetLeft?: number;
  offsetTop?: number;
  innerRef?: React.RefObject<HTMLDivElement>;
}

interface IMenuState {
  x: number;
  y: number;
}

export default class Menu extends Component<IMenuProps, IMenuState> {
  constructor(props: IMenuProps) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
    const updateSize = () => {
      const parent = this.props.parentRef.current;
      this.setState({
        x: (parent?.offsetLeft && parent?.offsetLeft) || 0,
        y: (parent?.offsetHeight && parent?.offsetTop + parent?.offsetHeight) || 0,
      });
    };
    window.addEventListener("resize", updateSize);
  }

  componentDidUpdate() {
    const parent = this.props.parentRef.current;
    if (parent?.offsetLeft && parent?.offsetLeft - (this.props.offsetLeft || 0) !== this.state.x) {
      this.setState({
        x: (parent?.offsetLeft && parent?.offsetLeft - (this.props.offsetLeft || 0)) || 0,
        y: (parent?.offsetHeight && parent?.offsetTop + (this.props.offsetTop || parent?.offsetHeight)) || 0,
      });
    }
  }

  render() {
    return (
      <div
        ref={this.props.innerRef}
        className="menu"
        style={{
          transform: `translate3d(${this.state.x}px, ${this.state.y}px, 0px)`,
          display: `${this.props.visible ? "block" : "none"}`,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
