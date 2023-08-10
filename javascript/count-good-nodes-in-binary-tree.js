// pretty easy question, just need a way to track the max.  In the BFS I used a second queue
// With DFS, can just keep passing the max into the recursive function and then update as needed

// BFS but it's much slower than DFS

var goodNodes = function (root) {
  let res = 0;
  let queue = [root];
  let queue2 = [root.val];
  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      let value = queue2.shift();

      if (node) {
        console.log("node.val " + node.val);
        console.log("value " + value);
        if (node.val >= value) {
          console.log("hit");
          res++;
        }
        value = Math.max(node.val, value);

        if (node.left) {
          queue.push(node.left);
          queue2.push(value);
        }
        if (node.right) {
          queue.push(node.right);
          queue2.push(value);
        }
      }
    }
  }
  return res;
};

// DFS
// exact same logic, just need to keep passing down a max as you go and update your max if it increments

var goodNodes = function (root) {
  let res = 0;
  function dfs(node, max) {
    if (!node) return;
    if (node.val >= max) {
      res++;
    }
    max = Math.max(node.val, max);
    dfs(node.left, max);
    dfs(node.right, max);
  }
  dfs(root, root.val);
  return res;
};
