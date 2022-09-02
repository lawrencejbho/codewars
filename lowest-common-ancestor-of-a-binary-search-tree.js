// There's something very weird on this problem where you need to specify .val on your p and q or it'll just keep
// returning the wrong answer

//* This problem is much easier to understand if you draw it out with numbers. Keep in mind it is a BST.
// If the two targets are less than the root then you go left and vice versa.
// If one root is bigger and one is less then we are at the divergent root and we just return the root.
// Complexity is log(n).  We only have to visit 1 node for each level in the tree.  So complexity is the height of the tree.

// we are going to dfs through the tree and find the two roots that we're looking for
// when we find these roots, we will return themselves and anything else is null
// because it's a binary search tree, in the case where we do find both roots, no conditions are met so we return the ancestor
// otherwise we would just get null
// also consider if the two roots are connected to each other, the top root would be the final return
// I think if we get a null at the bottom it will keep returning null as it goes up, but not sure how that works here

var lowestCommonAncestor = function (root, p, q) {
  const lca = (n) => {
    if (!n) return null;
    if (n.val == p.val || n.val == q.val) return n;
    let left = lca(n.left);
    let right = lca(n.right);

    if (!left) return right;
    if (!right) return left;

    return n;
  };
  return lca(root);
};

// here is a much more concise solution.  If we don't meet the requirements we return the current root. Otherwise dfs.

function lowestCommonAncestor(root, p, q) {
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}

// Here's another way to solve this problem using a while loop.

function lowestCommonAncestor(root, p, q) {
  while (root !== null) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else {
      return root;
    }
  }
}
