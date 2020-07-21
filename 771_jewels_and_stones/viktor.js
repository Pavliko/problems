/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let res = 0;

  [...S].forEach((item, i) => {
      if (J.indexOf(item) !== -1) {
          res++;
      }
  });
  return res;
};
