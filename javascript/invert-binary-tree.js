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

// using BFS

var invertTree = function (root) {
  let queue = [];

  if (!root) {
    return root;
  }

  queue.push(root);

  while (queue.length) {
    let currentNode = queue.shift();

    let temp = currentNode?.left;
    currentNode.left = currentNode?.right;
    currentNode.right = temp;

    currentNode.children = [currentNode.left, currentNode.right];

    for (let i = 0; i < currentNode.children.length; i++) {
      let node = currentNode.children[i];
      if (node) {
        queue.push(node);
      }
    }
  }

  return root;
};
