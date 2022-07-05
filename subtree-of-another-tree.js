var isSubtree = function (root, subRoot) {
  if (!root && !subRoot) return true;
  if (!root || !subRoot) return false;
  else if (root.val == subRoot.val) {
    isSameTree(root, subRoot);
  } else {
    isSubtree(root.left) && isSubtree(root.right);
  }

  function isSameTree(p, q) {
    if (!p & !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  function dfs(node) {
    if (!node) {
      return false;
    } else if (isSameTree(node, subRoot)) {
      return true;
    } else {
      return dfs(node.left) || dfs(node.right);
    }
  }

  dfs(root);
};
