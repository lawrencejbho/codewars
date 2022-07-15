// because it's sorted, we can check if our two numbers added together are greater than the target, if > than target
// then decrease j, if too small then we increase i
// we're guaranteed to find the answer so not a lot of checks or corner cases needs to be accounted for

// time complexity is O(n)

const numbers = [2, 7, 11, 15];
const numbers2 = [2, 3, 4];
const numbers3 = [-1, 0];

var twoSum = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (true) {
    if (numbers[i] + numbers[j] == target) {
      return [i + 1, j + 1];
    } else if (numbers[i] + numbers[j] > target) {
      j--;
    } else {
      i++;
    }
  }
};

console.log(twoSum(numbers3, -1));

// probably most optimized way of coding it

function twoSumPointers(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (true) {
    const sum = nums[i] + nums[j];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else {
      return [i + 1, j + 1];
    }
  }
}
