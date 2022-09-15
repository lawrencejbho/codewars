/* 

Quick Select (based on Quick Sort)

On the average case it should be O(n), but worst case it could be quadratic. 

Basically we recursively go through the array using a pivot which can just be our 
right, go through the numbers and p will land at the spot where the pivot should be.
Then swap the values of p with our pivot to put it in the proper spot.  Next since 
we know that this number is sorted, we can check p against k which is the index we're
looking for.  Then recursively check either side left or right based on the value 
of k.


*/

var findKthLargest = function (nums, k) {
  k = nums.length - k;

  function quickSelect(left, right) {
    let pivot = nums[right];
    let p = left;
    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        let swap = nums[p];
        nums[p] = nums[i];
        nums[i] = swap;
        p++;
      }
    }
    let swap = nums[p];
    nums[p] = nums[right];
    nums[right] = swap;

    if (p > k) {
      return quickSelect(left, p - 1);
    } else if (p < k) {
      return quickSelect(p + 1, right);
    } else {
      return nums[p];
    }
  }

  return quickSelect(0, nums.length - 1);
};

// heap solution but the complexity is O(n + klogn) so O(klogn) which is still better than using sort

var findKthLargest = function (nums, k) {
  const mpq = new MaxPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    mpq.enqueue(nums[i]);
  }
  let j = 0;
  while (j < k) {
    var res = mpq.dequeue().element;
    j++;
  }
  return res;
};

// easiest way to do it with sort O(nlogn)

var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};
