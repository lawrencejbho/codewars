// so this problem is super easy as you can just BFS.  however, there is one important edge case and that is when
// there are no right side nodes so you actually will need to return a left side node.  Therefore, we still need to BFS
// both left and right, but we need to come up with a formula so that we'll always push the last node in the queue
// so we use i = queue_length -1  If the queue length is 1, we push that single node.  If the queue length is 2 we push
// the second(last) node.

var rightSideView = function (root) {
  if (!root) return [];
  let res = [];
  let queue = [root];
  while (queue.length) {
    let queue_length = queue.length;
    for (let i = 0; i < queue_length; i++) {
      let node = queue.shift();
      if (i == queue_length - 1) {
        res.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return res;
};
