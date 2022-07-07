// using MaxPriority Queue
// first add all elements into the max priority queue
// pop out the first two elements which are already sorted where first is going to be larger, then run while loop
// until the number of stones is 1 or 0 run a comparison checking that they don't equal,
// and then it will automatically enqueue(1-2) as a new stone
// return the last element or 0 if there's nothing
// complexity is like n + logn + logn so equals O(n)

const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

var lastStoneWeight = function (stones) {
  const mpq = new MaxPriorityQueue();
  for (let i = 0; i < stones.length; i++) {
    mpq.enqueue(stones[i]);
  }

  while (mpq.size() > 1) {
    let stone1 = mpq.dequeue().element;
    let stone2 = mpq.dequeue().element;
    if (stone1 !== stone2) {
      mpq.enqueue(stone1 - stone2);
    }
  }
  return mpq.size() == 0 ? 0 : mpq.front().element;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));

// there are couple ways of solving, some people use recursion and some people use the built in sort method for arrays
// I'm actually not sure how this solution handles a bunch of 0s being created, I guess it might just result in like
// 1 0 0 , and this becomes 1 0, then this becomes 1
// pretty clever solution that still handles edge cases pretty naturally
// think the complexity here is O(nlogn)

var lastStoneWeight2 = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a); //sort the remaining stones in decending order;
    stones[1] = stones[0] - stones[1]; //smash the first and second stones ie the stones with largest weight ans assign the remaining stone weight to 1st index
    stones.shift(); //shift the array to get rid of the 0 index
  }
  return stones[0]; //return the 0 index value ie the resultl
};

// recursive solution
// think the complexity is also O(nlogn)

var lastStoneWeight = function (stones) {
  if (stones.length < 2) return stones;
  stones.sort((a, b) => a - b);
  let a = stones.pop();
  let b = stones.pop();
  stones.push(Math.abs(a - b));
  return lastStoneWeight(stones);
};
