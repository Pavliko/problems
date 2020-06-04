/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSumSeenSoFar = nums[0];
  let currentMaxSum = maxSumSeenSoFar;

  for (let i = 1; i < nums.length; i++) {

    let currentElement = nums[i];
    currentMaxSum = Math.max(currentElement, currentMaxSum + currentElement);
    maxSumSeenSoFar = Math.max(currentMaxSum, maxSumSeenSoFar);

  }

  return maxSumSeenSoFar;
};
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let result = maxSubArray(arr);

console.log(result, result === 6);

var func = () => { for (let i = 0; i < 100000; i++) { maxSubArray(arr); } }
func();/*?.*/
