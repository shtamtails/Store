import React from "react";

interface CurrencyMenuProps {
  handleCurrencyChange: Function;
}

export const CurrencyMenu: React.FC<CurrencyMenuProps> = ({ handleCurrencyChange }) => {
  return (
    <div className="currency-menu">
      <button className="currency-val" onClick={() => handleCurrencyChange("$")}>
        $ USD
      </button>
      <button className="currency-val" onClick={() => handleCurrencyChange("€")}>
        € EUR
      </button>
      <button className="currency-val" onClick={() => handleCurrencyChange("¥")}>
        ¥ JPY
      </button>
    </div>
  );
};
