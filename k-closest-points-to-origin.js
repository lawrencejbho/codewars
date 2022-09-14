var kClosest = function (points, k) {
  const mpq = new MinPriorityQueue();
  const res = [];
  for (let i = 0; i < points.length; i++) {
    let x = points[i][0];
    let y = points[i][1];
    let distance = [];
    distance = [Math.pow(x, 2) * Math.pow(y, 2), x, y];
    mpq.enqueue(distance);
  }

  while (mpq.size() > k) {
    mpq.dequeue().element;
  }

  for (let i = 0; i < k; i++) {
    res.push(mpq.dequeue().element);
  }

  return res;
};
