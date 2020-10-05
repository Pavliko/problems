var smallerNumbersThanCurrent = function(nums) {
  const sorted = nums.sort((a,b)=>a-b);
  const res = [];
  console.log(sorted, sorted.findIndex((el)=>el===8))
  for(let i=0; i<nums.length; i++){
      console.log(i, nums[i], sorted.findIndex((el)=>el===nums[i]))
      res.push(sorted.findIndex((el)=>el===nums[i]))
  }
  return res
};

var smallerNumbersThanCurrent = function(nums) {
  const sorted = [...nums].sort((a,b)=>a-b);
  const res = [];
  for(let i=0; i<nums.length; i++){
      res.push(sorted.findIndex((el)=>el===nums[i]))
  }
  return res
};
