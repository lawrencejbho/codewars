let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
let nums2 = [100, 4, 200, 1, 3, 2];

// this answer is pretty good, basically throw into a set and let's track the output using a global variable max
// iterate through the numbers, if the set has our number -1 then go to the next
// use two variables that will help our while loop when we do find the base number
// currNum will increment everytime we see the +1 of our number and add up our Max
// this continues as it searches the set for additional consecutive numbers until it doesn't
// the max is then calculated based on the saved max value and the currentMax, lastly return the max

function longestConsecutive(nums) {
  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    // need to use of here instead of in
    if (set.has(num - 1)) continue;

    let currNum = num;
    let currMax = 1;

    while (set.has(currNum + 1)) {
      currNum++;
      currMax++;
    }
    max = Math.max(max, currMax);
  }
  return max;
}

// console.log(longestConsecutive(nums2));

// this is the same thing as the above with a couple things to shorten the code
// we can use !set.has and also use y-num as the currMax
// because it's consecutive, y is basically going to be the largest number

function longestConsecutive2(nums) {
  const set = new Set(nums);
  let best = 0;
  let y = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      y = num;
      while (set.has(y)) {
        y++;
      }
      best = Math.max(best, y - num);
    }
  }
  return best;
}

console.log(longestConsecutive2(nums2));
