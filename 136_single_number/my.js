/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let onlyOne = true;

    for (let j = i + 1; j < nums.length; j++) {
      if (num[i] === num[j]) {
        onlyOne = false;
        break;
      }
    }

    if(onlyOne) return n;
  }
};

