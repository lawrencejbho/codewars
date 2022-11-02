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
