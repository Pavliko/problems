/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const len = T.length;

  return T.map((t,i) => {
      for (let j = i+1; j < len; j++) {
         if (T[j] > t) {
             return j - i;
         }
      }
      return 0;
  });
};
