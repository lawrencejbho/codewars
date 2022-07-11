// this is how I initially solved it and still got a pretty good run time
// I could see it not being a recommended way of doing things as I use a ton of array methods that might be a
// problem if the amount of unique numbers grows infinitely large

let numbers = [1, 1, 1, 2, 2, 3];
let k = 2;

var topKFrequent = function (nums, k) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] !== undefined) {
      hash[nums[i]] += 1;
    } else {
      hash[nums[i]] = 1;
    }
  }

  let keys = Object.keys(hash);
  let values = Object.values(hash);

  let arr = [];

  for (let i = 0; i < k; i++) {
    let max = Math.max(...values);
    let index = values.findIndex((value) => value == max);
    arr.push(keys[index]);
    values.splice(index, 1);
    keys.splice(index, 1);
  }
  return arr;
};

// console.log(topKFrequent(nums, k));

// here is the recommended solution using bucket sort
// this one is pretty tricky to implement, there's a ton of nuances here
// first create the bucket so that it equals the total number of items in the input
// do the normal hash map, and we are going to sort the pairs based on their frequency and put it into our array
// we then can go through the top of the array to grab the highest values and return it based on k

var topKFrequent2 = function (nums, k) {
  const count = {};
  const bucket = Array(nums.length + 1)
    .fill()
    .map(() => []); // I'm not sure why we need to map over to put an array in each item.  But without this, it doesn't work

  const res = [];

  for (let num of nums) {
    if (count[num]) {
      count[num] += 1;
    } else {
      count[num] = 1;
    }
  }
  for (let num in count) {
    bucket[count[num]].push(parseInt(num)); // this will add the value at it's frequency(index) in our bucket array
  }
  for (let i = nums.length; i >= 0 && k > 0; k--) {
    // this while loop first starts at the top and goes down, it's also going to track k at the same time
    while (bucket[i].length === 0) i--; // since a specific number could have multiple numbers with the same frequency, we use this while loop instead
    res.push(bucket[i].shift()); // this pushes the value into our result array and continues to push for each item with the same frequency
    // I have no clue how we are also decrementing k here, like if we get two items in the same frequency then how does k go down to 0 to break our loop
  }

  return res;
};

console.log(topKFrequent2(numbers, 2));

const topKFrequent3 = (nums, k) => {
  const map = {};
  const result = [];
  const bucket = Array(nums.length + 1)
    .fill()
    .map(() => []);

  for (let num of nums) {
    map[num] = ~~map[num] + 1;
  }
  console.log(map);

  for (let num in map) {
    bucket[map[num]].push(parseInt(num));
  }
  console.log(bucket);

  for (let i = nums.length; i >= 0 && k > 0; k--) {
    while (bucket[i].length === 0) i--;
    result.push(bucket[i].shift());
  }

  return result;
};

// console.log(topKFrequent3(numbers, k));
