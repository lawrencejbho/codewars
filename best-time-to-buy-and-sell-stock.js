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

// console.log(bestAnswer());

var maxProfit = function (prices) {
  let max = 0;
  let left = 0;
  let right = 1;
  while (right < prices.length) {
    const profit = prices[right] - prices[left];
    if (profit > max) {
      max = profit;
    }
    if (profit < 0) {
      left = right;
    }
    right += 1;
  }
  return max;
};

// basically like two pointers, you have a left and a right and keep adjusting until you go through
// the entire string
function slidingWindow(prices) {
  let result = 0;
  let left = 0;
  let right = 1;
  while (right < prices.length) {
    if (prices[right] - prices[left] > result) {
      result = prices[right] - prices[left];
    }
    if (prices[left] > prices[right]) {
      left = right;
    }
    right++;
  }
  return result;
}

console.log(slidingWindow(prices));
