/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const n = nums.length;
  let maxValue = nums[0];
  let current;

  for (let i = 0; i < n; i++) {
    current = nums[i];
    if (current > maxValue) maxValue = current;
    for (let j = i + 1; j < n; j++) {
      current += nums[j];

      if (current > maxValue) maxValue = current;
    }
  }

  return maxValue;
};

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let result = maxSubArray(arr); /*?.*/

console.log(result, result === 6);
//n = 1000
// O(n + n*(n+1)/2) = O(501 500)
// O(n * n) = O(1 000 000)
