/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const jArr = J.split('');
  const sArr = S.split('');

  return sArr.reduce((res, item) => {
      res += jArr.includes(item) ? 1 : 0;
      return res
  }, 0)
};
