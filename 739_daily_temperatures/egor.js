/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const result = Array(T.length).fill(0);
  const temp = [];

  T.forEach((value, index) => {
    while (temp.length !== 0 && temp[temp.length - 1].value < value) {
      const previousIndex = temp.pop().index;
      const duration = index - previousIndex;
      result[previousIndex] = duration;
    }

    temp.push({ value, index });
  });

  return result;
};
