// leetcode premium
// union find again

var countComponents = function (n, edges) {
  let par = [];
  for (let i = 0; i < n; i++) {
    par.push(i);
  }
  let rank = [];
  for (let i = 0; i < n; i++) {
    rank.push(1);
  }

  function find(n) {
    let parent = par[n];
    while (parent != par[parent]) {
      par[parent] = par[par[parent]];
      parent = par[parent];
    }
    return parent;
  }

  function union(n1, n2) {
    let p1 = find(n1);
    let p2 = find(n2);

    if (p2 == p1) return 0;
    if (p2 > p1) {
      par[p1] = p2;
      rank[p2] += rank[p1];
    } else {
      par[p2] = p1;
      rank[p1] += rank[p2];
    }
    return 1;
  }

  let result = n;
  for (let [a, b] of edges) {
    result -= union(a, b);
  }

  return result;
};
