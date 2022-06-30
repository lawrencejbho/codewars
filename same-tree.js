// this is what I came up with, definitely not the best solution as I'm storing in arrays and using join() to compare them

var isSameTree = function (p, q) {
  const firstArray = [];
  const secondArray = [];
  const dfs = (node) => {
    if (node === null) {
      firstArray.push(null);
      return;
    }
    dfs(node.left);
    dfs(node.right);
    firstArray.push(node.val);
  };
  const dfs2 = (node) => {
    if (node === null) {
      secondArray.push(null);
      return;
    }
    dfs2(node.left);
    dfs2(node.right);
    secondArray.push(node.val);
  };

  dfs(p);
  dfs2(q);

  if (firstArray.join() == secondArray.join()) {
    return true;
  }
  return false;
};

//* this is the proper way by comparing each node and running recursively left and right
// each call will just compare one by one whether they match
// if they are all matching it will return true all the way up

var isSameTree = function (p, q) {
  if ((p == null) & (q == null)) return true;
  if ((p == null && q !== null) || (p !== null && q == null)) {
    return false;
  }
  if (p.val != q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
