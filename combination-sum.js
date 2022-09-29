var combinationSum = function (nums, target) {
  let res = [];
  let combinations = [];

  function dfs(i, cur, sum) {
    if (sum == target) {
      res.push(combinations.slice());
      return;
    } else if (sum > target || i >= nums.length) {
      return;
    }
    combinations.push(nums[i]);
    dfs(i, combinations, sum + nums[i]);
    combinations.pop();
    dfs(i + 1, combinations, sum);
  }

  dfs(0, combinations, 0);
  return res;
};

// same logic but using a for loop instead

var combinationSum = function (nums, target) {
  let res = [];
  let combinations = [];

  function dfs(i, sum) {
    if (sum > target || i >= nums.length) {
      return;
    } else if (sum == target) {
      res.push(combinations.slice());
      return;
    }
    for (let j = i; j < nums.length; j++) {
      combinations.push(nums[j]);
      dfs(j, sum + nums[j]);
      combinations.pop();
    }
  }
  dfs(0, 0);
  return res;
};
