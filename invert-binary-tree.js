// not sure how to compile this
// this one is pretty easy, all you do is swap your left and right and then pass it down recursively
// to the child nodes
// concise way of using a helper function

function reverseBinaryTree(root) {
  dfs(root);
  return root;
}

function dfs(node) {
  if (!node) return;
  let temp = node.left;
  node.left = node.right;
  node.right = temp;
  dfs(node.left);
  dfs(node.right);
}

// this is the answer in leetcode
var invertTree = function (root) {
  dfs(root);
  return root;
};

function dfs(node) {
  if (!node) return;
  let temp = node.left;
  node.left = node.right;
  node.right = temp;
  dfs(node.left);
  dfs(node.right);
}
