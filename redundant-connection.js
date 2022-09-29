/*
Neetcode's video explanation isn't actually what is happening in the code, but the solution still works.  
I flipped the logic in union to match the video solution which is a lot easier to understand.
The console logs make it a lot easier to see what's happening
*/

function findRedundantConnection(edges) {
  let par = [];
  for (let i = 0; i < edges.length + 1; i++) {
    par.push(i);
  }
  let rank = [];
  for (let i = 0; i < edges.length + 1; i++) {
    rank.push(1);
  }

  // find the node's parent
  function find(n) {
    let parent = par[n];

    // we want to find the root parent where the node's parent is itself
    while (parent != par[parent]) {
      par[parent] = par[par[parent]]; // shorten the links as we go up - path compression
      parent = par[parent];
    }
    return parent;
  }

  function union(n1, n2) {
    let p1 = find(n1);
    let p2 = find(n2);

    // console.log("n1 " + n1);
    // console.log("n2 " + n2);
    // console.log("p1 " + p1);
    // console.log("p2 " + p2);
    // if the parents are the same return false otherwise update our values accordingly
    if (p1 == p2) return false;
    // if p2 is the parent
    if (rank[p1] < rank[p2]) {
      par[p1] = p2;
      rank[p2] += rank[p1];
      // if p1 is the parent
    } else {
      par[p2] = p1;
      rank[p1] += rank[p2];
    }
    // console.log(par);
    // console.log(rank);
    return true;
  }
  for (let i = 0; i < edges.length; i++) {
    if (!union(edges[i][0], edges[i][1])) return [edges[i][0], edges[i][1]];
  }
}

// this is neetcode's solution

function findRedundantConnection(edges) {
  let par = [];
  for (let i = 0; i < edges.length + 1; i++) {
    par.push(i);
  }
  let rank = [];
  for (let i = 0; i < edges.length + 1; i++) {
    rank.push(1);
  }

  // find the node's parent
  function find(n) {
    let parent = par[n];

    // we want to find the root parent where the node's parent is itself
    while (parent != par[parent]) {
      par[parent] = par[par[parent]]; // shorten the links as we go up - path compression
      parent = par[parent];
    }
    return parent;
  }

  function union(n1, n2) {
    let p1 = find(n1);
    let p2 = find(n2);

    // console.log("n1 " + n1);
    // console.log("n2 " + n2);
    // console.log("p1 " + p1);
    // console.log("p2 " + p2);
    // if the parents are the same return false otherwise update our values accordingly
    if (p1 == p2) return false;
    // if p1 is the parent
    if (rank[p1] > rank[p2]) {
      par[p2] = p1;
      rank[p1] += rank[p2];
      // if p2 is the parent
    } else {
      par[p1] = p2;
      rank[p2] += rank[p1];
    }
    // console.log(par);
    // console.log(rank);
    return true;
  }
  for (let i = 0; i < edges.length; i++) {
    if (!union(edges[i][0], edges[i][1])) return [edges[i][0], edges[i][1]];
  }
}
