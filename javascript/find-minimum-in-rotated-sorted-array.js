/*

first solution I came up with which is mostly a complicated binary search that checks for specific conditions and also runs into some issues when mid equals another pointer so I put in a condition 

Neetcode solution is super smart.  Normally in binary search we run a check if our mid is the proper value, so instead we can just keep using Math.min to check it versus our former result.

*/

const nums = [4, 5, 6, 7, 0, 1, 2];
// const nums = [3, 4, 5, 1, 2];

// const nums = [3, 1, 2];
// const nums = [2, 3, 4, 5, 1];
// const nums = [5, 1, 2, 3, 4];

function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid == left || mid == right) {
      return nums[left] > nums[right] ? nums[right] : nums[left];
    }

    if (nums[mid] > nums[left] && nums[right] > nums[mid]) {
      return nums[left];
    } else if (nums[mid] > nums[left] || nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}

// console.log(findMin(nums));

function findMin2(nums) {
  let result = nums[0];
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while (left <= right) {
    if (nums[left] < nums[right]) {
      result = Math.min(result, nums[left]);
    }

    mid = Math.floor((left + right) / 2);

    result = Math.min(result, nums[mid]);

    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

console.log(findMin2(nums));
