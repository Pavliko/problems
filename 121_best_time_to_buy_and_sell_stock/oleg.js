var maxProfit = function (prices) {
  let profit = 0;
  let minPrice = prices[0];
​
  prices.forEach(price => {
    minPrice = Math.min(price, minPrice);
    profit = Math.max(profit, price - minPrice);
  });
​
  return profit;
};
​
/* Medium SLOW */
​
var maxProfit = function (prices) {
  const lastIndex = prices.length - 1;
  let profit = 0;
​
  if (lastIndex < 1) {
    return profit;
  }
​
  let globalIndex = 0;
  let currentIndex = globalIndex + 1;
​
  while (globalIndex !== lastIndex) {
    const sell = prices[currentIndex] - prices[globalIndex];
​
    profit = Math.max(sell, profit);
​
    if (currentIndex === lastIndex) {
      globalIndex++;
      currentIndex = globalIndex + 1;
    } else {
      currentIndex++;
    }
  }
​
  return profit;
};
​
/* VERY SLOW */
​
var maxProfit = function (prices) {
  let profit = 0;

  prices.forEach(price => {
    const notLargestPrice = Math.max(...prices) !== price;

    if (notLargestPrice) {
      const index = prices.indexOf(price);
      const restArr = prices.slice(index);

      restArr.forEach(next => {
        const sellPrice = next - price;

        profit = Math.max(sellPrice, profit);
      });
    }
  });

  return profit;
}
