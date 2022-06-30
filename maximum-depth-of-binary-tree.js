// first try but not quite right
function maximumDepth(root) {
  dfs(root, 1);

  let maxDepth = 0;
  function dfs(node, level) {
    if (!node) return;
    if (level > maxDepth) maxDepth = level;
    if (node.left) {
      return dfs(node.left, level + 1);
    }
    if (node.right) {
      return dfs(node.right, level + 1);
    }
    return maxDepth;
  }
}

// this is a concise way of putting it, basically because it's a binary tree, we can can trust that going all the way down
// right or left will eventually give us the largest hierarchy
// we then can compare against two paths to see which is longer and then add 1 for the root node
function dfs(node) {
  if (!node) return 0;
  return 1 + Math.max(dfs(node.left), dfs(node.right));
}

//* this is a more intuitive approach, here we are going to start at the root and then go down one level
// at this point it finds a left and right and goes recursively
// with each recursive call we are updating our max value based on the level, if there is no node then it breaks first
var maxDepth = function (root) {
  let max = 0;
  function dfs(node, level) {
    if (!node) return;
    if (level > max) max = level;
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }
  dfs(root, 1);

  return max;
};
