/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  let sortedStones = stones.sort((a,b) => b-a);
  while(sortedStones.length > 1) {
      let diff = sortedStones[0] - sortedStones[1];
      if(!diff) {
          sortedStones.splice(0,1);
          sortedStones.splice(0,1);
      } else {
          sortedStones[0] = diff;
          sortedStones.splice(1,1);
      }
      sortedStones = sortedStones.sort((a,b) => b-a);
  }
  return sortedStones
};
