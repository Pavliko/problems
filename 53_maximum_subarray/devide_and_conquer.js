function cross_sum(nums, left, right, p) {
  if (left === right) return nums[left];

  let left_subsum = Number.NEGATIVE_INFINITY;
  let curr_sum = 0;
  for (let i = p; i >= left; i--) {
    curr_sum += nums[i];
    left_subsum = Math.max(left_subsum, curr_sum);
  }

  let right_subsum = Number.NEGATIVE_INFINITY;
  curr_sum = 0;
  for (let i = p + 1; i < right+1; i++) {
    curr_sum += nums[i];
    right_subsum = Math.max(right_subsum, curr_sum);
  }

  return left_subsum + right_subsum
}

function helper(nums, left, right) {
  if (left === right) return nums[left];

  let p = Math.floor((left + right) / 2);

  let left_sum = helper(nums, left, p);
  let right_sum = helper(nums, p + 1, right);

  let cross_sum_result = cross_sum(nums, left, right, p);

  return Math.max(left_sum, cross_sum_result, right_sum);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  return helper(nums, 0, nums.length - 1);
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
