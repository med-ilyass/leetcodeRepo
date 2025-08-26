/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const component = target - nums[i];

    if(map.has(component)){
        return [map.get(component), i]
    }
    map.set(nums[i],i)
  }
  return []
};

const arr = [23, 4, 24, 523, 4, 5, 3, 7, 45];
console.log(twoSum(arr, 30));
