/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const current = digits.length
    for (let i = current - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0
    }
    digits.unshift(1)
    return digits
};
console.log(plusOne([1, 2, 3]));   // [1,2,4]
console.log(plusOne([9]));       // [1,0]
console.log(plusOne([9, 9, 9]));   // [1,0,0,0]