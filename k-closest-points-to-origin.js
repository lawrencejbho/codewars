/* 
Leetcode submissions involve coding up your own heap but that's too much work.  

We use min priority queue so that we can get the smallest elements, and it looks like the last parameter we pass 
in the enqueue is the priority.  So calculate the distance on each point and then enqueue.  After that just 
dequeue accordingly and push it into our array to be returned.

Complexity is O(n) to heapify.  But we don't have that in the priority queue data structure so we have
to loop and enqueue instead.  

- Heap/Priority Queue - Insertion and removal is done in O(logn)

- So this implementation is O(nlogn) + O(klogn).  Enqueue + Dequeue.
- Therefore, O(nlogn) - we get the same complexity as sorting.

- In theory, if you had a heap ready to go, you would actually get O(klogn) and beat sorting.  

If you were to use arrays + sort method, the complexity would be O(nlogn).  

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
