/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  const mapY = {
      'U': 1,
      'D': -1
  }
  const mapX = {
      'R': 1,
      'L': -1
  }
  let x = 0, y = 0
  for(let i = 0; i < moves.length; i++) {
      x += mapX[moves[i]] || 0;
      y += mapY[moves[i]] || 0;
  }
  return x===0 && y===0
};
