export const calculateConversion = (
  amount,
  rate,
  markupPercentage = 0.0005
) => {
  if (!amount || !rate) {
    return { trueAmount: 0, markedUpAmount: 0 };
  }

  const parsedAmount = parseFloat(amount);
  const trueAmount = parsedAmount * rate;

  const markedUpRate = rate - rate * markupPercentage;
  const markedUpAmount = parsedAmount * markedUpRate;

  return {
    trueAmount: parseFloat(trueAmount.toFixed(2)),
    markedUpAmount: parseFloat(markedUpAmount.toFixed(2)),
  };
};
