var prices = [7, 1, 5, 3, 6, 4];
// var prices = [7, 5, 4, 3, 2, 1];
// var prices = [1, 2];

// convoluted way that I used two arrays
// the high array is basically a stack where I unshift values to update the first index
// this is so that if there are like 100s of values, it'll keep checking for the next low to high
function result() {
  const high = [];
  const low = [prices[0]];
  let total = 0;
  let counter;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= low[0]) {
      low[0] = prices[i];
      high.unshift(prices[i]);
      counter = true;
    } else if (prices[i] > high[0] && counter) {
      high[0] = prices[i];
    }
    if (total < high[0] - low[0]) {
      total = high[0] - low[0];
    }
  }
  return total;
}
// console.log(result());

// I think I was confused as to when you can buy and sell
// this is a pretty clever answer because it will store the min at the time and then check for the best
// total for that min, if that min updates it stores the old value and continues checking for the best
function bestAnswer() {
  let result = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    result = Math.max(result, prices[i] - min);
  }
  return result;
}

console.log(bestAnswer());
