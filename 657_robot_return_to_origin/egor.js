itled
var judgeCircle = function(moves) {
    const movesArr = moves.split('');

    const result = movesArr.reduce((acc, direction) => {
        switch (direction) {
            case 'U':
                acc.x += 1;
                break;
            case 'D':
                acc.x -= 1;
                 break;
            case 'R':
                acc.y += 1;
                 break;
            case 'L':
                acc.y -= 1;
                 break;
        }

        return acc
    }, {
      x: 0,
      y: 0,
    })

    return result.x === 0 && result.y === 0
};
