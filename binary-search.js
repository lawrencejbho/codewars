// const nums = [-1, 0, 3, 5, 7, 12];

// basically we have a min and max value that will keep pushing inwards until it finds the value
// when it doesn't find the value, min and max still contract towards the index where the value should be
// at this point they will both update to be the same index and then we can return false
// everytime we do a check, we are checking if the middle = our target value.  This is why can update our min and max
// to be a +1 or -1 of the middle index as we already know the middle is not correct, we can then use the value afterwards
// as our new bound

// runtime wasn't as good but this is basically the same solution for the top answers
function binarySearch(nums, target) {
  let min = 0;
  let max = nums.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (nums[middle] > target) {
      max = middle - 1;
    } else if (nums[middle] < target) {
      min = middle + 1;
    } else if (nums[middle] == target) {
      return middle;
    }
  }
  return -1;
}

// console.log(binarySearch(nums, 6));

const nums = [-1, 0, 3, 5, 9, 12];

function bSearch(nums, target) {
  let min = 0;
  let max = nums.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (target > nums[mid]) {
      min = mid + 1;
    } else if (target < nums[mid]) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(bSearch(nums, 5));
