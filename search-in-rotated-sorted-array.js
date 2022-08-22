// const nums = [30, 40, 50, 60, 70, 0, 10, 20],
//   target = 21;

// const nums = [4, 5, 6, 7, 0, 1, 2],
//   target = 0;

// const nums = [4, 5, 6, 7, 0, 1, 2],
//   target = 3;

const nums = [5, 1, 2, 3, 4],
  target = 1;

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
    } else if (target < nums[left] && target < nums[mid]) {
      console.log("first");
      left = mid + 1;
    } else if (target > nums[left] && target > nums[mid]) {
      console.log("second");
      left = mid + 1;
    } else if (target > nums[right] && target > nums[mid]) {
      console.log("third");
      right = mid - 1;
    } else if (target < nums[right] && target < nums[mid]) {
      console.log("fourth");
      right = mid - 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(search(nums, target));
