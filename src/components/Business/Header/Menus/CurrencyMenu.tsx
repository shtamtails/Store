import React, { useMemo } from "react";
import { ICurrency } from "interface/IStore";
import { useQuery } from "@apollo/client";
import { FETCH_CURRENCIES } from "apollo/queries/storeAPI";
import { uid } from "uid";

interface CurrencyMenuProps {
  handleCurrencyChange: Function;
}

export const CurrencyMenu: React.FC<CurrencyMenuProps> = ({ handleCurrencyChange }) => {
  const { loading: currenciesLoading, error: currenciesError, data: currenciesData } = useQuery(FETCH_CURRENCIES);
  const currencies = useMemo(() => currenciesData?.currencies, [currenciesData]);

  return (
    <div className="currency-menu">
      {currencies?.map((currency: ICurrency) => (
        <button key={uid()} className="currency-val" onClick={() => handleCurrencyChange(currency.symbol)}>
          {currency.symbol} {currency.label}
        </button>
      ))}
    </div>
  );
};
