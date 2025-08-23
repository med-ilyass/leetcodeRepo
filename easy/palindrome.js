/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const n = String(x);
    return x == n.split('').reverse().join('');
};


console.log(isPalindrome(21212))
