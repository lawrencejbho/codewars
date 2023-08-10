// this problem is more medium than easy
// so first the recursion part is easy, it's basically the same there
// we keep a max variable to help out with the case where the max does not go through the root node
// consider a tree that is very long, at each level we want to return a length of 1
// now based on a node that has many children, we need to make sure that it can account for the longer leg
// so this is where Math.max(left,right) + 1 takes place.  It'll make sure we're good for that specific node
// each node basically checks it's longest leg between left and right
// so the parent can then add up it's left and right to figure out it's max value
// so as we go deeper into the recursive calls, the max is going to be tested at each node, as we go through the call stack
// so it'll start at like 0 and eventually check higher up in the tree

var diameterOfBinaryTree = function (root) {
  let max = 0;
  const dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);

    max = Math.max(left + right, max);
    return Math.max(left, right) + 1;
  };

  dfs(root);
  return max;
};
