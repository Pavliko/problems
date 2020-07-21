/**
 * @param {string} s
 * @return {number}
 */
const map = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};
var romanToInt = function(s) {
  let sum = 0;
  let i = 0;

  while(s[i] !== undefined){
    let current = map[s[i]];
    let next = map[s[i + 1]];

    if (next !== undefined && next > current) {
      i++;
      sum += next - current;
    } else {
      sum += current;
    }
    i++;
  }

  return sum;
};

