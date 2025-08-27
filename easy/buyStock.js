/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const lowest = Math.min(...prices);
  let profit = 0;
  const lowIndex = prices.indexOf(lowest);

  for (let i = lowIndex + 1; i < prices.length; i++) {
    let nextS = prices[i] - lowest;

    if (nextS > profit) {
      profit = nextS;
    }

    
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7,6,4,3,1]));
