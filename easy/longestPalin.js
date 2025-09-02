/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let odd = false;
  let count = {};
  let length = 0;

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char in count) {
    let freq = count[char];

    length += Math.floor(freq / 2) * 2;
    if (freq % 2 !== 0) odd = true;
  }
  if (odd) {
    length += 1;
  }
  return length;
};
