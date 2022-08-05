import { useMemo } from "react";
import { ICurrency } from "interface/API_Model";
import { useQuery } from "@apollo/client";
import { FETCH_CURRENCIES } from "apollo/queries/storeAPI";
import { uid } from "uid";
import { setCurrency } from "store/slices/settings";
import { useAppDispatch } from "hooks/redux";
import { writeToLocalStorage } from "utils/localStorage";

interface CurrencyMenuProps {
  setCurrencyModal: (state: boolean) => void;
}

export const CurrencyMenu: React.FC<CurrencyMenuProps> = ({ setCurrencyModal }) => {
  const { data: currenciesData } = useQuery(FETCH_CURRENCIES);
  const currencies = useMemo(() => currenciesData?.currencies, [currenciesData]);
  const dispatch = useAppDispatch();

  const handleCurrencyChange = (currency: string): void => {
    dispatch(setCurrency(currency));
    writeToLocalStorage("currency", currency);
    setCurrencyModal(false);
  };

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
