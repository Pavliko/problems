/**
 * @param {number[]} T
 * @return {number[]}
 */
​
var dailyTemperatures = T => {
  return T.map((num, i) => {
    let e = i + 1;

    while (e < T.length) {
      if (T[e] > num) {
        return e - i;
      }

      e++;
    }

    return 0;
  });
};
