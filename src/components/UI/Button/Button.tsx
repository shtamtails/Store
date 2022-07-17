import React, { Component } from "react";

interface IButton {
  children?: string | JSX.Element;
  color?: "green" | "black" | "";
  type?: "primary" | "outline" | "color";
  size?: "xs" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  onClick?: Function;
  className?: string;
  bgcolor?: string;
  selected?: boolean;
  height?: number;
  width?: number;
}

export default class Button extends Component<IButton> {
  render() {
    let className = ``;
    this.props.type && (className += ` btn-${this.props.type} `);
    this.props.color && (className += ` ${this.props.color} `);
    this.props.size && (className += ` btn-${this.props.size} `);
    this.props.fullWidth && (className += " fullwidth ");
    this.props.className && (className += ` ${this.props.className} `);
    this.props.selected && (className += ` btn-selected `);
    this.props.bgcolor &&
      (this.props.bgcolor === "white" || this.props.bgcolor === "#ffffff" || this.props.bgcolor === "#fff") &&
      (className += "btn-color-white");
    className = className.trim().replace(/\s\s+/g, " ");
    return (
      <button
        className={className}
        onClick={() => {
          this.props.onClick && this.props.onClick();
        }}
        style={{
          backgroundColor: this.props.bgcolor && this.props.bgcolor,
          height: this.props.height && `${this.props.height}px`,
          width: this.props.width && `${this.props.width}px`,
        }}
      >
        {this.props.children}
      </button>
    );
  }
}
