var judgeCircle = function(moves) {
  const d = moves.split('').reduce((acc, element) => {
      if (element === 'D') acc.x = acc.x - 1
      if (element === 'U') acc.x = acc.x + 1
      if (element === 'L') acc.y = acc.y - 1
      if (element === 'R') acc.y = acc.y + 1
       return acc
  }, {x: 0, y: 0})
   return d.x === 0 && d.y === 0
};
