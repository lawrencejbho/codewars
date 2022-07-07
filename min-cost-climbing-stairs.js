// this is using a dynamic programming bottom up approach (tabulation) - we save values in variables and keep checking
// the key is that we only need to track the values for i-1 and i-2
// as we choose the smallest value, we are going to update our array so that it has the new costs

// I think the hardest thing for me to understand is that we iterate over each index rather than thinking
// about factoring that we can skip like two steps.  I think I need to think instinctively that when we have
// something like choice of 1 or 2, the normal for loop can still handle it

const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

var minCostClimbingStairs = function (cost) {
  if (cost.length == 1) return cost[0];
  if (cost.length == 2) return Math.min(cost[0], cost[1]);

  let one = cost[0];
  let two = cost[1];

  for (let i = 2; i < cost.length; i++) {
    let min = cost[i] + Math.min(one, two);
    one = two;
    two = min;
    // console.log(`i: ${i} one: ${one} two: ${two}`);
  }
  return Math.min(one, two);
};

// console.log(minCostClimbingStairs(cost));

// another iterative approach that is similar to the greedy algorithm
// start at index 2 and add up the cost of the current with the min of the last two indexes
// continue to do this for each index until we get to the end
// take the lowest of the last two indices at the end

var minCostClimbingStairs2 = function (cost) {
  for (let i = 2; i < cost.length; i++) {
    cost[i] = cost[i] + Math.min(cost[i - 1], cost[i - 2]);
  }
  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};

console.log(minCostClimbingStairs2(cost));
