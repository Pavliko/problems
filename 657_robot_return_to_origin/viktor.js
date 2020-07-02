var judgeCircle = function (moves) {
  let x = 0;
  let y = 0;

  const commands = moves.split('');

  commands.forEach(c => {
    if (c === 'L') {
      x--;
    } else if (c === 'R') {
      x++;
    } else if (c === 'U') {
      y++;
    } else {
      y--;
    }
  });

  return x === 0 && y === 0;
}
