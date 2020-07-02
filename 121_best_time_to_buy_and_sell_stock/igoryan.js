/**
 * @param {number[]} prices
 * @return {number}
 */
/*
    Заменять все убывающие последовательности на первое и последнее значения
    0. min idx === max idx
    1. min idx < max idx
    2. second min idx < max idx || min < second max idx
*/
const recursivePart = (arr) => {
  const min = arr.indexOf(Math.min(...arr));
  const max = arr.indexOf(Math.max(...arr));

  if(min === max) {
      return 0
  } else if(min < max) {
      return arr[max] - arr[min]
  } else {
      return Math.max(recursivePart(arr.slice(max+1, arr.length)), recursivePart(arr.slice(0, min)))
  }
}
var maxProfit = function(prices) {
  let preparedPrices = [prices[0]]
  for(let i = 2; i < prices.length; i++) {
      if(!(prices[i] < prices[i-1] && prices[i-1] < prices[i-2])) {
          preparedPrices.push(prices[i-1]);
      }
  }
  preparedPrices.push(prices[prices.length-1])
  return recursivePart(preparedPrices)
};
