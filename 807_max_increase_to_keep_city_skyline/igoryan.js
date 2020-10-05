var maxIncreaseKeepingSkyline = function (grid) {
  let MaxX = []
  let MaxY = []
  let ReversedArr = []
  for (let i = 0; i < grid.length; i++) {
    MaxX.push(Math.max(...grid[i]))
    for (let j = 0; j < grid[i].length; j++) {
      if (!ReversedArr[j]) ReversedArr[j] = []
      if (!ReversedArr[j][i]) ReversedArr[j][i] = []
      ReversedArr[j][i].push(grid[i][j])
    }
  }

  for (i = 0; i < ReversedArr.length; i++) {
    MaxY.push(Math.max(...ReversedArr[i]))
  }

  let res = 0
  for (i = 0; i < MaxX.length; i++) {
    for (let j = 0; j < MaxY.length; j++) {
      res += Math.max(grid[i][j], Math.min(MaxX[i], MaxY[j])) - grid[i][j]
    }
  }
  return res
}
