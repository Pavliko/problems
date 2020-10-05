/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones = stones.sort((a, b) => a - b);
    const firstStone = stones.pop();
    const secondStone = stones.pop();

    if (firstStone === secondStone) {
      continue;
    }

    stones.push(Math.abs(firstStone - secondStone));
  }

  return stones[0] || 0
};
