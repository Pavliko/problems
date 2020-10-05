/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let sum = 0,
      maxI = [],
      maxJ = [];

  for(let i = 0; i < grid[0].length; i++) {
    for(let j = 0; j < grid.length; j++) {
      let current = grid[i][j];
      if((maxI[i] || 0) <= current) {maxI[i] = current}
      if((maxJ[j] || 0) <= current) {maxJ[j] = current}
    }
  }

  for(let i = 0; i < maxI.length; i++) {
    for(let j = 0; j < maxJ.length; j++) {
      sum += Math.min(maxI[i], maxJ[j]) - grid[i][j];
    }
  }

  return sum;
};
