var validTree = function (n, edges) {
  if (edges.length < n - 1) return false;

  const par = [];
  for (let i = 0; i < n; i++) {
    par.push(i);
  }
  const rank = [];
  for (let i = 0; i < n; i++) {
    rank.push(1);
  }

  function find(n) {
    let p = par[n];
    while (p != par[p]) {
      par[p] = par[par[p]];
      p = par[p];
    }
    return p;
  }

  function union(n1, n2) {
    let p1 = find(n1);
    let p2 = find(n2);

    if (p1 == p2) return false;
    if (p2 > p1) {
      par[p1] = p2;
      rank[p2] += rank[p1];
    } else {
      par[p2] = p1;
      rank[p1] += rank[p2];
    }

    return true;
  }
  for (let [node, parent] of edges) {
    if (!union(node, parent)) return false;
  }

  return true;
};
