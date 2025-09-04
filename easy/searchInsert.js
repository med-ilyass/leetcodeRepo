/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let val = nums.indexOf(target);

  if(val !== -1){
    return val;
  }

  for(let i=0;i<nums.length;i++){
    if(target < nums[i]) return i;
  }
  return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 2));
