function cloneGraph(node) {
  let map = new Map();

  function dfs(node) {
    // have to use built in map methods and we want to return the new copied node, versus the original node
    if (map.has(node)) {
      return map.get(node);
    }

    // make sure to add in the value here
    let copy = new Node(node.val);
    // create our map with the key as the give node and the value is our copy node
    map.set(node, copy);
    for (let neighbor of node.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    // another way to write the for loop without using of, tricky thing is to figure out that the neighbors are an array versus an object
    // for(let i=0; i<node.neighbors.length; i++){
    //     copy.neighbors.push(dfs(node.neighbors[i]))
    // }

    // pretty useful console log here to see what the actual copy looks like versus the array output
    // console.log(copy)
    return copy;
  }

  if (node) {
    return dfs(node);
  }
}
