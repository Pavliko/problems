
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const bottom = Array(grid.length).fill(0);
  const left = Array(grid.length).fill(0);
  let result = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (bottom[j] < grid[i][j]) bottom[j] = grid[i][j];
      if (left[i] < grid[i][j]) left[i] = grid[i][j];
    }
  }

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      result += Math.min(bottom[j], left[i]) - grid[i][j];
    }
  }

  return result;
}
