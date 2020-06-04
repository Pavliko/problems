/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length;
  maxSum = nums[0];
  for (let i = 0; i < n; i++) {
    if (nums[i - 1] > 0) nums[i] += nums[i - 1]
    maxSum = Math.max(maxSum, nums[i]);
  }

  return maxSum;
};


let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let result = maxSubArray(arr);

console.log(result, result === 6);

var func = () => {
  for (let i = 0; i < 100000; i++) {
    maxSubArray(arr);
  }
}
func(); /*?.*/
