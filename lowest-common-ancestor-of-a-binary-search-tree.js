// there is some magic here in that we are running the recursion and the nodes will have an ancestor
// once they start to diverge

// I modified this solution to make more sense, put the if(!n) to return null, but it's actually implicit where
// if the n doesn't exist it is null and will return itself as null

// we are going to dfs through the tree and find the two nodes that we're looking for
// when we find these nodes, we will return themselves and anything else is null
// because it's a binary search tree, in the case where we do find both nodes, no conditions are met so we return the ancestor
// otherwise we would just get null
// also consider if the two nodes are connected to each other, the top node would be the final return
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

// because it's a binary search tree, it should be less on the left side and greater on the right side
// this helps you find the right value
// the first if statement is looking for the node that satisfies both requirements of looking for p and q, otherwise continue dfs

var lowestCommonAncestor = function (root, p, q) {
  if (
    (p.val <= root.val && q.val >= root.val) ||
    (q.val <= root.val && p.val >= root.val)
  ) {
    return root;
  } else if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
};
