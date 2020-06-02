/**
 * @param {number[]} nums
 * @return {number}
 */
const sum = (array) => array.reduce((a,b) => a+b, 0);

var singleNumber = function(nums) {
  const set = Array.from(new Set(nums));

  return 2 * sum(set) - sum(nums) ;
};


