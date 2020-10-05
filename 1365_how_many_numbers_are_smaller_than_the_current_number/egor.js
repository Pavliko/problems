/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  return nums.map((num) => {
    return nums.reduce((acc, second) => {
      acc += num <= second ? 0 : 1;
      return acc
    }, 0)
  })
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const sortedNums = [];
  const numbersCount = [];
  const result = [];
  let previousCount = 0;

  for (let number of nums) {
    sortedNums[number] = sortedNums[number] + 1 || 1;
  }

  for (let i in sortedNums) {
    const currentCount = sortedNums[i];

    numbersCount[i] = previousCount;
    previousCount += currentCount;
  }

  for (let i in nums) {
    result[i] = numbersCount[nums[i]];
  }

  return result;
};
