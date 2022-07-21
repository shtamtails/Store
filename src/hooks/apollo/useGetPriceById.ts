import { useQuery } from "@apollo/client";
import { FETCH_PRICE_BY_ID } from "apollo/queries/storeAPI";
import { useAppSelector } from "hooks/redux";
import { IPrice } from "interface/IStore";

export const useGetPriceById = (productID: string) => {
  const {
    loading: priceLoading,
    error: priceError,
    data: priceData,
  } = useQuery(FETCH_PRICE_BY_ID, {
    variables: {
      input: productID,
    },
  });

  const { currency } = useAppSelector((store) => store.storeParams);
  const price: number = priceData?.product.prices.filter((price: IPrice) => price.currency.symbol === currency)[0]
    .amount;

  return { price, currency };
};
