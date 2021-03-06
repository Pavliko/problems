/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minprice = Number.POSITIVE_INFINITY;
  let maxprofit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice;
    }
  }

  return maxprofit;
};

console.log(maxProfit([7,1,5,3,6,4]))
