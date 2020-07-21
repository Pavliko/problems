/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  var object = {
    x: 0,
    y: 0
  }
  console.log
  moves.split('').forEach(element => {
    if (element == "U") { object.y = object.y + 1 }
    if (element == "D") { object.y = object.y - 1 }
    if (element == "L") { object.x = object.x - 1 }
    if (element == "R") { object.y = object.y + 1 }
  })
  return (object.x + object.y) == 0
};
