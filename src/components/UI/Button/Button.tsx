import React, { Component } from "react";

interface IButton {
  children: string | JSX.Element;
  color?: "green" | "black";
  type?: "primary" | "outline";
  size?: "xs" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: Function;
}

export default class Button extends Component<IButton> {
  render() {
    let className = ``;
    this.props.type && (className += ` btn-${this.props.type} `);
    this.props.color && (className += ` ${this.props.color} `);
    this.props.size && (className += ` btn-${this.props.size} `);
    this.props.fullWidth && (className += " fullwidth ");
    className = className.trim().replace(/\s\s+/g, " ");
    return (
      <button
        className={className}
        onClick={() => {
          this.props.onClick && this.props.onClick();
        }}
      >
        {this.props.children}
      </button>
    );
  }
}
