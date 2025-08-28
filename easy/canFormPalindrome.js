// so to check if the string can form palindrom, I should count all characters
// the length of the string sould an odd number to be able to form plaindrome
// count each characters how many times repeted on the str
// only one odd count allowed

function canFormPalindrome(str) {
  const count = {};
  let odd = 0;

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char in count) {
    if (count[char] % 2 !== 0) {
      odd++;
    }
  }

  return odd <= 1;
}

console.log(canFormPalindrome("civic"));
