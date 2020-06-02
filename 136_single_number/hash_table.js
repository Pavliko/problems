/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let hash_table = {};

  for(let i of nums){
    if(hash_table[i] === undefined) hash_table[i] = 0;
    hash_table[i]++;
  }

  for(let i in hash_table) {
    if(hash_table[i] == 1) return i;
  }
};


