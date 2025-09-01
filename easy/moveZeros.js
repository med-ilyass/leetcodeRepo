// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  //declaring a variable with the value that we want to move to thj elast item of the array
  let insertPos = 0;
  const value = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== value) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }
  while (insertPos < nums.length) {
    nums[insertPos] = value;
    insertPos++;
  }
  return nums;
};
const arr = [2, 5, 0, 5, 3, 0, 4, 5, 6];
console.log(moveZeroes(arr));
