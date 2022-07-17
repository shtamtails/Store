import React, { Component } from "react";

interface CurrencyMenuProps {
  handleCurrencyChange: Function;
}

export default class CurrencyMenu extends Component<CurrencyMenuProps> {
  render() {
    return (
      <div className="currency-menu">
        <button className="currency-val" onClick={() => this.props.handleCurrencyChange("$")}>
          $ USD
        </button>
        <button className="currency-val" onClick={() => this.props.handleCurrencyChange("€")}>
          € EUR
        </button>
        <button className="currency-val" onClick={() => this.props.handleCurrencyChange("¥")}>
          ¥ JPY
        </button>
      </div>
    );
  }
}
