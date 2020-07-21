/**
 * @param {string} s
 * @return {number}
 */
​
const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
​
var romanToInt = function(s) {
    let result = 0;

    for (i = s.length - 1; i >= 0; i -= 1) {
        const previous = s[i + 1];
        const current = s[i];
        const previousValue = romans[previous];
        const currentValue = romans[current];

        const value = previous !== s.length && previousValue > currentValue
          ? -currentValue
          : currentValue

        result += value;
    }

    return result;
};
