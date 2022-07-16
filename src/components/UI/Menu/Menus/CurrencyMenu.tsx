import React, { Component } from "react";

export default class CurrencyMenu extends Component {
  render() {
    return (
      <div className="currency-menu">
        <button className="currency-val">$ USD</button>
        <button className="currency-val">€ EUR</button>
        <button className="currency-val">¥ JPY</button>
      </div>
    );
  }
}
