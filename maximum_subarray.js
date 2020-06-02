/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length;
  let maxValue = nums[0];
  let current;
  for (let i = 0; i < n; i++) {
    current = nums[i];
    for (let j = i; j < n; j++) {
      if (j != i) current += nums[j];

      if (current > maxValue) maxValue = current;
    }
  }

  return maxValue;
};

const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result === 6 ? "SUCCESS" : `FAIL: ${result} should === 6`);
