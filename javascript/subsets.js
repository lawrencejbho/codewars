const nums = [1, 2, 3];

function subsets(nums) {
  let res = [];
  let subset = [];
  function dfs(i) {
    if (i >= nums.length) {
      // this is kind of weird, but because subset is being modified we need to use slice() to return a shallow copy of it versus referencing the subset array directly
      // if you just set this as subset, the first res.push goes well but the last one modifies every value into a []
      res.push(subset.slice());
      return;
    }
    // decision to include nums[i]
    subset.push(nums[i]);
    dfs(i + 1);
    // decision to not include nums[i]
    subset.pop();
    dfs(i + 1);
  }

  dfs(0);
  return res;
}

console.log(subsets(nums));
