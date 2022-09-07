/* 
One thing to watch out for is your queue length is changing as you unshift it in the for loop, so make sure to save
it to a variable.  

This is considered a typical BFS problem involving a queue.  

First add the root to our queue.  As long as we have something in our queue, we are going to shift this value and 
add it to our array and then queue up the node's left and right.  This will make it so that we go from left to right rather
than when we do dfs which goes like all left and first.  The cool thing about this setup is that the queue will shift()
in the for loop and we need to separate queue.length or it'll just go on forever.  So we only want the for loop to last
for the length at the start of the loop.  Then this represents one level and we push the entire level array into our results.
Then our queue fills up again as we have new left and right nodes and we repeat.  

So it's mostly just BFS with some pushing nodes into an array.

Not sure complexity but some say it's O(V+E) which is verticies + edges, others say O(n)

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

// this one is slightly more intuitive
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
    if (level.length) res.push(level);
  }

  return res;
}
