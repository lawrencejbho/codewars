// start at the bottom nodes because it's recursive, we want each node to know it's values of left and right
// from there run comparisons on left and right to make sure there's not a bigger gap than 1
// each node will account for 1, and each time it has a left and right it'll check the difference between the two
// and take the max value - this is like a parent saying how many children they have
// so as it goes up if there is an imbalanced comparison we can return false

// could simplify the two if statements using math.abs

var isBalanced = function (root) {
  let res = true;
  const dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    if (left > right + 1) res = false;
    if (right > left + 1) res = false;

    return Math.max(left, right) + 1;
  };

  dfs(root);
  return res;
};
