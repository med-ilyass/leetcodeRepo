/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Infinity;
  let best = 0;

  for (const p of prices) {
    minPrice = Math.min(minPrice, p);
    best = Math.max(best, p - minPrice);
  }
  return best;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
console.log(Math.min(34, 23));
console.log(Math.max(34, 23));
const arr1 = [7, 1, 5, 3, 6, 4];
const arr2 = [23, 56, 3, 45, 7, 4];
const maxPrice1 = Math.max(...arr1);
const maxPrice2 = Math.max(...arr2);
console.log(
  "the max price on arr1 is " +
    maxPrice1 +
    " and is located in the index: " +
    arr1.indexOf(maxPrice1)
);
console.log(
    "the max price on arr2 is " +
      maxPrice2 +
      " and is located in the index: " +
      arr2.indexOf(maxPrice2)
  );
console.log(Math.max(...arr1, ...arr2));
