/**
 * @param {string} s
 * @return {number}
 */
const MAP = {I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, XC: 90, C: 100, CD: 400, D: 500, CM: 900, M: 1000};
​
var romanToInt = function (s) {
  const arr = [...s];

  return arr.reduce((res, current, i) => {
    let delta = MAP[current];

    if (['I', 'X', 'C'].includes(current)) {
      const next = MAP[`${current}${arr[i + 1]}`];

      if (next) {
        delta = next - MAP[arr[i + 1]];
      }
    }

    return res + delta;
  }, 0);
};
