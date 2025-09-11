/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    const countElement = {};

    for (let num of nums) {
        countElement[num] = (countElement[num] || 0) + 1

        if (countElement[num] > nums.length / 2) {
            return num
        }
    }
    return -1;
};