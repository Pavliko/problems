/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let sum, maxSum = Number.NEGATIVE_INFINITY;
  let max = prices[prices.length - 1];

  for (let i = prices.length - 2; i >= 0; i--) {
    let current = prices[i];

    if (current > max) {
      max = current;
    } else {
      sum = max - current;
    }

    if (maxSum < sum) maxSum = sum;
  }
  return maxSum > 0 ? maxSum : 0;
};

let arr = [11,7,10,2,4,1];
let answer = 5;
let result = maxProfit(arr);

console.log(result, result === answer);

// var func = () => { for (let i = 0; i < 100000; i++) { maxProfit(arr); } }
// func();/*?.*/

// let n = 1000000
// // O(n + n*(n+1)/2)
// console.log(n + n * (n + 1) / 2);
// // O(n * n)
// console.log(n * n);
// // O(n * log(n))
// console.log(n * Math.log10(n));
