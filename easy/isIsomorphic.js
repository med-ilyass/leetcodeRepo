//first thing, I should check the length if it's match

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const mapSt = {};
  const mapTS = {};

  for (let i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];

    if (mapSt[c1] && mapSt[c1] !== c2) return false;
    if (mapTS[c2] && mapTS[c2] !== c1) return false;

    mapSt[c1] = c2;
    mapTS[c2] = c1;
  }
  return true;
}

console.log(isIsomorphic("egg", "add"));    // true
console.log(isIsomorphic("foo", "bar"));    // false
console.log(isIsomorphic("paper", "title"));// true
console.log(isIsomorphic("foofe", "barer"));// false
