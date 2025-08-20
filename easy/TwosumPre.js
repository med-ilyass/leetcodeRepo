/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//     //return "not included";
//   }
// };
// let target = 9;
// let nums = [12, 6, 4, 9, 5];

// console.log(twoSum(nums, target));

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

let target = 9;
let nums = [12, 6, 4, 9, 5];
console.log(twoSum(nums, target));