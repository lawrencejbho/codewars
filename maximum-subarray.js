const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const nums2 = [5, 4, -1, 7, 8];

// greedy algo

// we are going to keep a running tally of the last numbers, if the last is greater than the next value
// then we will add it to our last and continue.  If the next value is greater than our running total
// then we know to start a new contiguous subarray and will reset the last to the value
// at any time, if the last is greater than our max then we will update max
var maxSubArray = function (nums) {
  if (nums.length == 1) return nums[0];
  let last = nums[0];
  let max = last;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + last > nums[i]) last += nums[i];
    else last = nums[i];
    if (last > max) {
      max = last;
    }
    // console.log(`i: ${i} last: ${last}`);
  }

  return max;
};

// this is exactly the same thing but condensed using math.max

function maxSubArray2(A) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}

console.log(maxSubArray(nums));
