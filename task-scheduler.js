/* 
The complexity should be O(n), but can be interpreted as O(n*m) where m is the idle time depending on the worst case
scenario where we get an array of just one letter and we need to wait the idle time. 

No counter method and no heapify in javascript so we use loops.  

First we need to count up the amount per each letter and store it in a hash.  Then for loop over the hash to enqueue 
into max priority queue.  We use a max because we want the largest value to get dequeue first.  Now we go through the problem
one step at a time.  First is to dequeue from mpq.  The value then gets put into our normal queue along with the time
that the letter is ready again.  If the value gets to 0, it will not get added to our queue.  We're also going to check
whether the first value in our queue matches the time and can get put back into the mpq.  I think because of how we are
doing everything in 1 second interval, all the values will always have different and increasing intervals so we just
need to check the first in our queue.  After we go through all values in our mpq, we will return with the amount of time
required

*/

const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

let tasks = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"],
  n = 2;

var leastInterval = function (tasks, n) {
  let hash = {};
  let mpq = new MaxPriorityQueue();

  // create hash tracking the number of occurrences of each letter
  for (let i = 0; i < tasks.length; i++) {
    if (hash[tasks[i]] == null) {
      hash[tasks[i]] = 0;
    }
    hash[tasks[i]] += 1;
  }

  // don't need to store the key
  Object.entries(hash).forEach(([key, value]) => {
    mpq.enqueue(value);
  });

  let time = 0;
  // queue will use [count,idleTime]
  let queue = [];

  // we want to process our mpq until all values inside are 0 and the mpq is empty
  while (mpq.size() || queue.length) {
    time++;
    if (mpq.size()) {
      let count = mpq.dequeue().priority - 1;
      // whenever count doesn't equal 0, make sure to add n here
      if (count) {
        queue.push([count, time + n]);
      }
    }
    // put the value back into the mpq
    if (queue.length && queue[0][1] == time) {
      mpq.enqueue(queue.shift()[0]);
    }
  }
  return time;
};
