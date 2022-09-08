/* 
The major gotcha in this problem is for example when on the right side of the tree, the node might be less than or
greater than the node above it and it looks correct, but it'll be less than or greater than the root which makes the BST
invalid.  What we do here is consider that there is going to be a left and right bound that starts at infinity.  But 
as soon as we go through the root we'll start updating the bounds.  Same thing can be done in the code and then we 
keep passing recursively as each node should have different bounds.  The if statement that we use for checking is easier
to understand with the ! as it represents our bounds.  

*/

var isValidBST = function (root) {
  let res = true;

  function dfs(node, left, right) {
    if (!node) return;

    if (!(node.val > left && node.val < right)) {
      res = false;
    }

    dfs(node.left, left, node.val);
    dfs(node.right, node.val, right);
  }

  dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
  return res;
};
