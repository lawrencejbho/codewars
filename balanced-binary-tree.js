//

var isBalanced = function (root) {
  let res = true;
  const dfs = (node) => {
    let left = dfs(node.left);
    let right = dfs(node.right);
    if (left > right + 1) return false;
    if (right > left + 1) return false;

    return Math.max(left, right) + 1;
  };

  dfs(root);
  return res;
};
