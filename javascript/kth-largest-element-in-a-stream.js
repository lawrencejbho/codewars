// closer to a medium problem, eh not really I think once you have a priority queue it's easy

// we are trying to grab the kth largest element in a sorted order which means we just want whatever is the largest
// based on the designated k value that they give us which is 3 in the example.  Not checking for distinct values.

// the reason we want to use a heap here is that we first want to sort out the array
// if we were to use an array, we can use binary search to help us find the kth element,
// but we run into issues when adding new values into the middle of the array because it will run in O(n)

// * there is no built in heap in js, but leetcode let's us use a priority queue library
// one thing to note about the priority queue is you can't access it like an array, so you have to use the built in
// functions like front to get the first element or size in order to get the length+1

// create priority queue and for each element in the nums array, we are going to enqueue - this will automatically sort it
// now we are going to pop all the elements that are greater than k
// when we add we will enqueue which automatically sorts, if the priority queue is greater than our k
// then we will also dequeue and then return the front value which is the kth element because it's a Min Priority Queue

const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");

var KthLargest = function (k, nums) {
  this.k = k;
  this.mpq = new MinPriorityQueue();
  for (let i = 0; i < nums.length; i++) {
    this.mpq.enqueue(nums[i]);
  }
  while (this.mpq.size() > k) {
    this.mpq.dequeue().element;
  }
};

KthLargest.prototype.add = function (val) {
  this.mpq.enqueue(val);
  if (this.mpq.size() > this.k) {
    this.mpq.dequeue().element;
  }
  return this.mpq.front().element;
};
