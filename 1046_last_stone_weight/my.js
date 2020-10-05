/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort(function (a, b) { return a > b ? 1 : -1 });

    let y = stones.pop();
    let x = stones.pop();

    if (x != y) stones.push(y - x);
  }

  return stones.length ? stones[0] : 0;
};
