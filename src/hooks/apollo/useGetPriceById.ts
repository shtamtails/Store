import { useQuery } from "@apollo/client";
import { FETCH_PRICE_BY_ID } from "apollo/queries/storeAPI";
import { useAppSelector } from "hooks/redux";
import { IPrice } from "interface/IStore";

export const useGetPriceById = (productID: string, prices?: IPrice[]) => {
  const { data: priceData } = useQuery(FETCH_PRICE_BY_ID, {
    variables: {
      input: productID,
    },
  });

  const { currency } = useAppSelector((store) => store.settings);
  const price: number = prices
    ? prices.filter((price: IPrice) => price.currency.symbol === currency)[0].amount
    : priceData?.product.prices.filter((price: IPrice) => price.currency.symbol === currency)[0].amount;

  return { price, currency };
};
