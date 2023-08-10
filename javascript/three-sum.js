// this is similar to the second two sum where it's sorted, this problem becomes a lot easier once we sort it
// after sorting we will have three pointers, i will use our for loop and j and k will be the left and right
// just like in the two sum.  We need to make sure we skip over any duplicates. For i, we will just check the
// last value which will still allow us to check the very first value
// j and k then use the same formula from two sum where if it's bigger or less than the total we'll increase one pointer
//* if j and k have a duplicate value AFTER pushing, then we can use while loops to go through each one
// this is probably the most tricky part after getting the rest of the logic part as it's the opposite of what we did for i

nums = [-1, 0, 1, 2, -1, -4];
nums2 = [0, 0, 0, 0];

var threeSum = function (numbers) {
  let nums = numbers.sort((a, b) => a - b);
  let res = [];
  if (nums.length < 3) return res;

  for (let i = 0; i <= nums.length - 2; i++) {
    if (nums[i] > 0) break;

    if (nums[i] == nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        res.push([nums[i], nums[j], nums[k]]);

        while (nums[j] == nums[j + 1]) {
          j++;
        }
        while (nums[k] == nums[k - 1]) {
          k--;
        }
        j++;
        k--;
      }
    }
  }
  return res;
};
console.log(threeSum(nums2));
