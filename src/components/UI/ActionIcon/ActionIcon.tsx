import { Component } from "react";

interface IActionIcon {
  children: JSX.Element | string;
  type?: "hover" | "outline";
  onClick?: Function;
  radius?: "xs" | "sm" | "md" | "lg" | "xl";
  innerRef?: React.RefObject<HTMLDivElement>;
}

export default class ActionIcon extends Component<IActionIcon> {
  render() {
    let className = "action-icon";
    this.props.type && (className += ` action-icon-${this.props.type} `);
    this.props.radius && (className += ` action-icon-radius-${this.props.radius} `);
    className = className.trim().replace(/\s\s+/g, " ");
    return (
      <div
        ref={this.props.innerRef}
        className={className}
        onClick={() => {
          this.props.onClick && this.props.onClick();
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
