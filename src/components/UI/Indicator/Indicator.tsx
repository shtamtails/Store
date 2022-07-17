import React, { Component } from "react";

interface IndicatorProps {
  children?: string | JSX.Element;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

interface IndicatorState {}

export default class Indicator extends Component<IndicatorProps, IndicatorState> {
  render() {
    return (
      <div
        className="indicator"
        style={{
          top: `${this.props.top}px`,
          right: `${this.props.right}px`,
          bottom: `${this.props.bottom}px`,
          left: `${this.props.left}px`,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
