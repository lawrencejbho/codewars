// I think this answer is super janky but it came out with a really good run time
// basically we setup a hash mask but use the value as the key and really all we care about here is looking for 0s
// if we have 1 zero, we run into a special use case so save that as a variable
// otherwise, during our first loop through we also will multiply all the values together
// next we loop through the same array again and if there is a zero, we will delete it from the hash and then
// loop through our hash to calculate the new result
// rest is for some edge cases like getting -0 and if there are more than 1 0s

// ok so apparently you're not supposed to use the division operator here

// const nums = [1, 2, 3, 4];
const nums = [-1, 1, 0, -3, 3];

var productExceptSelf = function (nums) {
  let hash = {};
  let total = 1;
  let zero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zero++;
    }
    hash[nums[i]] = i;
    total = total * nums[i];
  }

  let arr = [];
  let result = 1;
  for (let i = 0; i < nums.length; i++) {
    result = 1;
    if (zero == 1 && i == hash[0]) {
      delete hash[0];
      for (let i in hash) {
        result = result * i;
      }
    } else if (zero > 1) {
      result = 0;
    } else {
      result = total / nums[i];
    }
    if (result == -0) {
      result = 0;
    }
    arr.push(result);
  }
  return arr;
};

// console.log(productExceptSelf(nums));

// this is the proper way

var productExceptSelf2 = function (nums) {
  let arr = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    arr[i] = prefix;
    prefix *= nums[i];
    console.log(arr);
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    arr[j] *= postfix;
    postfix *= nums[j];
  }

  return arr;
};

console.log(productExceptSelf2(nums));
