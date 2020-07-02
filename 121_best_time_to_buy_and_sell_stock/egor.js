const maxProfit = (prices) => {
  const { result } = prices.reduce(
    (acc, price, i) => {
      if (price < acc.min) {
        acc.min = price;
      } else {
        const tempResult = price - acc.min;
        acc.result = Math.max(acc.result, tempResult);
      }

      return acc;
    },
    {
      min: prices[0],
      result: 0,
    },
  );

  return result;
}
