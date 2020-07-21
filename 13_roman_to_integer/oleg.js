/**
 * @param {string} s
 * @return {number}
 */
​
const getNum = letter => {
  switch (letter) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return 0;
  }
}
​
var romanToInt = function(s) {
  let i = s.length - 1;
  let sum = getNum(s.charAt(i));
  let prev = sum;

  while (i--) {
    const cur = getNum(s.charAt(i));
​
    if (cur < prev) {
      sum = sum - cur;
    } else {
      sum = sum + cur;
    }

    prev = cur;
  }
​
  return sum;
};
