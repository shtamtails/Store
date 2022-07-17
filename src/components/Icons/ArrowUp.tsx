import { IconInterface } from "interface/IIcon";
import React, { Component } from "react";

export default class ArrowUp extends Component<IconInterface> {
  render() {
    return (
      <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 3.5L4 0.5L1 3.5"
          stroke={this.props.color ? this.props.color : "black"}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
}
