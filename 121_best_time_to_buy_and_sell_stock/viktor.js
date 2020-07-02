/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let res = 0;
  let i = prices.length-1;

  for (i; i > 0; i--) {
      const min = Math.min(...prices);
      const el = prices[i];

      if (el > min) {
          let temp = el-min;
​
          if (temp > res) {
              res = temp;
          }
      }

      prices.pop();
  }

  return res;
};
