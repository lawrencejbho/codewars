/* 
Javascript has weird answers for this one on Leetcode.  

We use min priority queue so that we can get the smallest elements, and it looks like the last parameter we pass 
in the enqueue is the priority.  So calculate the distance on each point and then enqueue.  After that just 
dequeue accordingly and push it into our array to be returned.

Complexity is O(n) to heapify  + O(klogn) to dequeue so O(klogn).  

If you were to use sort, it would be n(logn) 
*/

var kClosest = function (points, k) {
  const mpq = new MinPriorityQueue();
  const res = [];
  for (let point of points) {
    let distance = Math.pow(point[0], 2) + Math.pow(point[1], 2);
    mpq.enqueue(point, distance);
  }

  while (res.length < k) {
    res.push(mpq.dequeue().element);
  }

  return res;
};
