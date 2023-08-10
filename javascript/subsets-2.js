var subsetsWithDup = function (nums) {
  let res = [];
  let combinations = [];

  // need to sort but the time complexity here is only logn so no big deal
  nums.sort();

  function dfs(i, combinations) {
    if (i >= nums.length) {
      res.push(combinations.slice());
      return;
    }

    combinations.push(nums[i]);
    dfs(i + 1, combinations);
    combinations.pop();
    // logic is the same on the left most subtree, but on it's right side we're going to increment our pointer in the case that there are duplicates
    while (i + 1 < nums.length && nums[i] == nums[i + 1]) {
      i++;
    }
    dfs(i + 1, combinations);
  }
  dfs(0, combinations);
  return res;
};

// this answer also works by not tracking combinations

var subsetsWithDup = function (nums) {
  let res = [];
  let combinations = [];

  nums.sort();

  function dfs(i) {
    if (i >= nums.length) {
      res.push(combinations.slice());
      return;
    }
    combinations.push(nums[i]);
    dfs(i + 1);
    combinations.pop();
    while (i + 1 < nums.length && nums[i] == nums[i + 1]) {
      i++;
    }
    dfs(i + 1);
  }
  dfs(0);
  return res;
};
