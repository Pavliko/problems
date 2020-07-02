var judgeCircle = function (moves) {
  let x = 0;
  let y = 0;

  moves.split('').forEach(move => {
    if (move === 'U') y++;
    else if (move === 'D') y--;
    else if (move === 'L') x--;
    else x++;
  });

  return !x && !y;
}
