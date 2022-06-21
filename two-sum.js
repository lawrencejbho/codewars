// first need an object so that we can store our values and quickly check them for the future
// loop through the input and set object key to the nums value and the value to the index
// on each loop, we check if the target - the current value exists in the vals object
// it it does, then we will return current index, and we can also use some math to get the index
// of the other pair inside the object

function twoSum(nums, target) {
  let vals = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in vals) {
      return [vals[target - nums[i]], i];
    } else {
      vals[nums[i]] = i;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));

// slightly faster solution, something about using that in operator probably isn't very efficient
function twoSumFaster(nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const desiredValue = target - currentValue;
    if (hash[desiredValue] != null) {
      return [hash[desiredValue], i];
    } else {
      hash[nums[i]] = i;
    }
  }
}
console.log(twoSumFaster([2, 7, 11, 15], 9));
