import { useQuery } from "@tanstack/react-query";
import { fetchRates } from "../Pages/Rates/api";
import countryToCurrency from "../Libs/CountryCurrency.json";

const useExchangeRate = (fromCountry, toCountry) => {
  const { data, isFetching, isError, error, refetch } = useQuery({
    queryKey: ["exchangeRate", fromCountry, toCountry],
    queryFn: () =>
      fetchRates(countryToCurrency[fromCountry], countryToCurrency[toCountry]),
    enabled: !!countryToCurrency[fromCountry] && !!countryToCurrency[toCountry],
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { exchangeRate: data, isFetching, isError, error, refetch };
};

export default useExchangeRate;
