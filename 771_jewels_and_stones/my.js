/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let jewels = {};
  let count = 0;

  for (let i = 0; i < J.length; i++) { jewels[J[i]] = true; }
  for (let i = 0; i < S.length; i++) { if (jewels[S[i]]) count++; }

  return count;
}
