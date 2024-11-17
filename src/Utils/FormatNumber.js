export const formatNumberWithCommas = (number) => {
  if (isNaN(number)) return "0";
  return new Intl.NumberFormat("en-US").format(number);
};
