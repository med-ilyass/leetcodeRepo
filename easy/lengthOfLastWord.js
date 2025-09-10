/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const rever = s.split(' ').reverse().join(' ');
    let crh = 0;
    let som = 0;
    for (let char of rever) {
        if (char !== " ") {
            som++;
            crh++;
        } else if (crh > 1) {
            break;
        }
    }
    return som;
};

console.log(lengthOfLastWord("hello world"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))

