/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  var rowLength = grid.length
  var columnLength = grid[0].length
  var rowMax = [];
  var colMax = [];
  var result = 0;
  for (let i = 0; i < rowLength; i += 1) {
    rowMax[i] = Math.max(...grid[i]);
  }
  for (let i = 0; i < columnLength; i += 1) {
    colMax[i] = 0;
    for (let j = 0; j < rowLength; j += 1) {
      colMax[i] = grid[j][i] > colMax[i] ? grid[j][i] : colMax[i]
    }
  }
  for (let i = 0; i < columnLength; i += 1) {
    for (let j = 0; j < rowLength; j += 1) {
      result += Math.min(rowMax[i], colMax[j]) - grid[i][j];
    }
  }
  return result
}
