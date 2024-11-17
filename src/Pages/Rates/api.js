import { apiClient } from "../../Utils/ApiClient";

const getApiBaseUrl = () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("API base URL is not defined in environment variables");
  }

  return baseUrl;
};

export const fetchRates = async (sellCurrency, buyCurrency) => {
  if (!sellCurrency || !buyCurrency) {
    throw new Error("Both sellCurrency and buyCurrency must be provided.");
  }

  const baseUrl = getApiBaseUrl();

  const url = `${baseUrl}?sellCurrency=${sellCurrency}&buyCurrency=${buyCurrency}`;
  const data = await apiClient(url);

  if (data.error) {
    throw new Error(data.message || "Failed to fetch exchange rate");
  }

  return data.retailRate;
};

// add more api call here
