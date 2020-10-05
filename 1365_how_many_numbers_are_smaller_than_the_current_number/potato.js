/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  var acc = []
  var prevEL = 0;
  let sorted = nums.slice().sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    acc.push(sorted.indexOf(nums[i]))
  }
  return acc
};
