// so you first need to use the same code on how to check for the sameTree
// next we use a similar dfs approach where we are going to traverse the first tree and go through each node
// base case is no node, otherwise use our first recursive function to check if we got a same tree
// if we don't, then we keep recursing left and right to check out each of the additional nodes in the tree

var isSubtree = function (root, subRoot) {
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

  return dfs(root);
};

console.log(true || false);
