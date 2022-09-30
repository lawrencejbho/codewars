// leetcode premium
// union find again

function countComponents(n, edges) {
  let par = [];
  for (let i = 0; i < n; i++) {
    par.push(i);
  }
  let rank = [];
  for (let i = 0; i < n; i++) {
    par.push(1);
  }

  function find(n) {
    let res = n;
    while (res != par[res]) {
      par[res] = par[par[res]];
      res = par[res];
    }
    return res;
  }

  function union(n1, n2) {
    let p1 = find(n1);
    let p2 = find(n2);

    if (p1 == p2) return 0;
    if (rank[p2] > rank[p1]) {
      par[p1] = p2;
      rank[p2] += rank[p1];
    } else {
      par[p2] = p1;
      rank[p1] += rank[p2];
    }
    return 1;
  }
  let result = n;
  for (let [n1, n2] of edges) {
    if (union(n1, n2)) result--;
  }
  return result;
}
