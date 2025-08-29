/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const count = {};
  for (let i of nums) {
    count[i] = (count[i] || 0) + 1;
  }
  for (let j in nums) {
    if (count[j] > 1) return true;
  }
  return false;
};

console.log(containsDuplicate([1,2,3,1]));
