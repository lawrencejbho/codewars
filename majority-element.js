var majorityElement = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] == undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }

    if (map[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
};

var boyerMooreVoting = function (nums) {
  let count = 0;
  let candidate;

  for (let num of nums) {
    if (count == 0) {
      candidate = num;
    }
    if (num == candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
};
