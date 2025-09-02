/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let stack = [];
  const openingPar = ["(", "{", "["];
  const closingPar = [")", "}", "]"];

  for (let char of s) {
    if (openingPar.includes(char)) {
      stack.push(char);
    } else {
      let closingIndex = closingPar.indexOf(char);
      let expectedOpening = openingPar[closingIndex];
      if (stack.length === 0 || stack[stack.length - 1] !== expectedOpening) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};
console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
console.log(isValid("([)]"));    // false
console.log(isValid("{[]}"));    // true
console.log(isValid("()"));     //true
