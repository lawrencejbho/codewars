/*
This problem is super easy to visualize if you just know how a BST works.  The left most node is the smallest
so we can dfs until we get to that node and then push it's value into the array and it'll be sorted.  

Iterative solution - we use a stack in this case and will visit every node.  First we visit all the left nodes and 
because of BST properties, the last value in our while loop to get added to the stack will get pushed as it's the 
smallest number.  From here, we check if n=k and if it is then we return the .val as the answer.  If not, then 
we continue and add in our right node if it exists.  If it does then it gets added into the stack and we can also 
check again for any left nodes there.  Basically we keep looping as we go through every node and our logic should
pop each value in order so we can make our way to k sequentially.  

DFS is a bit easier to explain although I could probably talk my way through iterative.  DFS should be slower though.

*/

// iterative solution that might actually be faster as you don't have to visit every single node
var kthSmallest = function (root, k) {
  let n = 0;
  let stack = [];
  let current = root;

  while (stack || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    n++;
    current = stack.pop();
    if (n == k) {
      return current.val;
    }
    current = current.right;
  }
};

// super slow solution using dfs
var kthSmallest = function (root, k) {
  let arr = [];
  function dfs(node) {
    if (!node) return;

    if (node.left) dfs(node.left);
    arr.push(node.val);
    if (node.right) dfs(node.right);
  }
  dfs(root);

  return arr[k - 1];
};
