/* 
The complexity should be O(n), but can be interpreted as O(n*m) where m is the idle time depending on the worst case
scenario where we get an array of just one letter and we need to wait the idle time. 

No counter method and no heapify in javascript so we use loops.  


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

  // might not need the key, just need value
  Object.entries(hash).forEach(([key, value]) => {
    mpq.enqueue(value);
  });

  let time = 0;
  // queue will use [count,idleTime]
  let queue = [];

  // * the end logic here doens't look right so might need to draw it out, like how do we extract the time value
  while (mpq.size() || queue.length) {
    time++;
    if (queue.length) {
      let count = mpq.dequeue().priority - 1;
      if (count) {
        queue.push([count, time + n]);
      }
    }
    if (queue.length && queue[0][1] == time) {
      mpq.enqueue(queue.shift()[0]);
    }
  }
  return time;
};

console.log(leastInterval(tasks, n));
