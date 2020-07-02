/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {

  let x = 0,
    y = 0;
  for (move of moves) {
    switch (move) {
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      case "R":
        x++;
        break;
      case "L":
        x--;
        break;
    }
  }
  return x === 0 && y === 0
};

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0,
    y = 0,
    i = 0;
  const hash = {
    "U": function () {
      y++;
    },
    "D": function () {
      y--;
    },
    "R": function () {
      x++;
    },
    "L": function () {
      x--;
    }
  }
  while (moves[i]) {
    hash[moves[i++]]();
  }

  return x === 0 && y === 0
};
