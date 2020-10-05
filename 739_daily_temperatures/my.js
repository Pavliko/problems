/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let result = [];

  for(let i = 0; i < T.length; i++) {
    for(let j = i + 1; j <= T.length; j++) {

      if(T[j] === undefined) {
        result[i] = 0;
      } else if (T[j] > T[i]) {
        result[i] = j - i;
        break;
      }

    }
  }

  return result;
};
