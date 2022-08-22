/* basically this is the same as our normal binary search, but we need to figure out whether the pivot is on the right or left of our middle 
once it makes that distinction, it will then check against the middle and the left or right.  It then does binary search as normal from here.

Another way to interpret what is going on here is that we have a left and right side and we need to figure out where the pivot is.  So there's 
two possibilities of right and left and then we do binary search for either side.  So the solution uses 2 binary searches for right and left.  

*/

// const nums = [30, 40, 50, 60, 70, 0, 10, 20],
//   target = 21;

// const nums = [4, 5, 6, 7, 0, 1, 2],
//   target = 0;

// const nums = [4, 5, 6, 7, 0, 1, 2],
//   target = 3;

const nums = [5, 1, 2, 3, 4],
  target = 4;

// function binarySearch(nums, target) {
//   let min = 0;
//   let max = nums.length - 1;
//   while (min <= max) {
//     let mid = Math.floor((min + max) / 2);
//     if (target > nums[mid]) {
//       min = mid + 1;
//     } else if (target < nums[mid]) {
//       max = mid - 1;
//     }
//     if (target == nums[mid]) {
//       return mid;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch(nums, target));

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target == nums[mid]) {
      return mid;
    }

    // left sorted portion
    if (nums[mid] >= nums[left]) {
      if (target < nums[left] || target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      // right sorted portion
      if (target > nums[right] || target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
}

console.log(search(nums, target));
