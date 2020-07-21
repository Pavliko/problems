/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  return   S.split('').filter(element => J.indexOf(element) !== -1).length;
};
