/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let res = [];
  const l = T.length
  T.map((el, i) => {
    let daysCount = 0;
    let j = i + 1;
    for (j; j < l; j++) {
      if (T[j] > el) {
        daysCount = j - i;
        break;
      }
    }
    res.push(daysCount)
  })
  return res;
};
