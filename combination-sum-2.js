// this is another way to do it using a for loop

var combinationSum2 = function (nums, target) {
  let res = [];
  let combinations = [];
  nums.sort();

  function dfs(i, sum) {
    if (sum == 0) {
      res.push(combinations.slice());
      return;
    } else if (i >= nums.length || sum < 0) {
      return;
    }

    let prev = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] == prev) continue;
      combinations.push(nums[j]);
      dfs(j + 1, sum - nums[j]);
      combinations.pop();
      prev = nums[j];
    }
  }

  dfs(0, target);
  return res;
};

// more intuitive way to do this problem

var combinationSum2 = function (nums, target) {
  let res = [];
  let combinations = [];

  nums.sort();

  function dfs(i, sum) {
    if (sum == target) {
      res.push(combinations.slice());
      return;
    } else if (i >= nums.length || sum > target) {
      return;
    }
    combinations.push(nums[i]);
    dfs(i + 1, sum + nums[i]);
    combinations.pop();
    while (i < nums.length && nums[i] == nums[i + 1]) {
      i++;
    }
    dfs(i + 1, sum);
  }

  dfs(0, 0);
  return res;
};
