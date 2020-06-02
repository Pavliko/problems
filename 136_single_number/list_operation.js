/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let no_duplicate_list = []

  for(let i of nums){
    const index = no_duplicate_list.indexOf(i)

    if(index === -1) {
      no_duplicate_list.push(i)
    } else {
      no_duplicate_list.splice(index, 1)
    }
  }

  return no_duplicate_list.pop();
};

