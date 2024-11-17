export const calculateConversion = (amount, rate, markupPercentage = 0.05) => {
  if (!amount || !rate) {
    return { trueAmount: 0, markedUpAmount: 0 };
  }

  const trueAmount = parseFloat(amount) * rate;
  const markup = markupPercentage / 100; // Convert percentage to decimal
  const markedUpRate = rate - rate * markup;
  const markedUpAmount = parseFloat(amount) * markedUpRate;

  return { trueAmount, markedUpAmount };
};
