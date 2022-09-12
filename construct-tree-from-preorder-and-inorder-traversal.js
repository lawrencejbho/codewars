/*

Ok this solution is pretty confusing, but it's a grind 75 question. 

First thing to note is that preorder is we start at the root and then do preorder on the left subtree.  Then we do the right subtree.

Inorder is left to right, root, then left to right 


First to note is that the first node of preorder will be our root.  We can then find the middle which is root in the 
inorder traversal.  This tells us the left, middle, and right.  Then we can recursively create the left and right
of each node by passing a smaller preorder and inorder. 

How slice works: If you put array.slice(1) - it will include all values from index 1 and on 
If you do array.slice(1,3) - it will include index 1 and 2 

*/

function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
}
