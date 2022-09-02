/* 
One thing to watch out for is your queue length is changing as you unshift it in the for loop, so make sure to save
it to a variable.  

*/

function levelOrder(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while (queue.length) {
    const level = [];
    const queue_length = queue.length;
    for (let i = 0; i < queue_length; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    res.push(level);
  }

  return res;
}

// same solution but need to keep in mind we can add empty arrays to the result, so just checks there's something in there
function levelOrder(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while (queue.length) {
    const level = [];
    const queue_length = queue.length;
    for (let i = 0; i < queue_length; i++) {
      const node = queue.shift();
      if (node) {
        level.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (level) res.push(level);
  }

  return res;
}
