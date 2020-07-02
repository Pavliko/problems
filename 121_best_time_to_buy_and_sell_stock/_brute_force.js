/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxprofit = 0;

  for (var i = 0; i < prices.length; i++) {
    for (var j = i + 1; j < prices.length; j++){
      let profit = prices[j] - prices[i];
      if (profit > maxprofit) maxprofit = profit;
    }
  }
  return maxprofit;
};

console.log(maxProfit([7,1,5,3,6,4]))
