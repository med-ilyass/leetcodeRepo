/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str1 = s
    .split(" ")
    .join("")
    .replace(/[^a-zA-Z0-9]/g, "");

  const str2 = str1.split("").reverse().join("");
  return str1.toLowerCase() === str2.toLowerCase();
};

const st = "A man, a plan, a canal: Panama";
console.log(isPalindrome(st));
