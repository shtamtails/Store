import React, { Component } from "react";

interface OverlayProps {
  visible: boolean;
  children?: string | JSX.Element;
}

export default class Overlay extends Component<OverlayProps> {
  render() {
    return <>{this.props.visible && <div className="overlay">{this.props.children}</div>}</>;
  }
}
