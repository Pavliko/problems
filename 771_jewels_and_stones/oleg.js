/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const jevels = [...J];
  const stones = [...S];
  let count = 0;

  stones.forEach(stone => {
    if (jevels.includes(stone)) {
      count++;
    }
  });

  return count;
};


/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const jevels = [...J];
  let i = S.length;
  let count = 0;

  while (i--) {
    const stone = S.charAt(i);
​
    if (jevels.includes(stone)) {
      count++;
    }
  }

  return count;
};
