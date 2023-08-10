// honestly not sure how someone would come up with this answer on a timed test.  But maybe it's just the pattern.

// so first create an array of 0s for our result, keep in mind that the last two numbers in the temperatures will return 0s so we don't have to worry about them
// iterate through the temperatures while using a stack to push every temp in, but the index is most important as we're going to count days later on
// the while loop will check if our stack has multiple values then keep checking them against the current temperature
// each one where the new day's temp is greater, we'll pop our stack and then find the value by subtracting the indexes
// the magic here is that the while loop will continue to check for us on our stack, so if we get a big number like 76, it'll go down the line and continue checking from the stack
// this then helps us fill out our result array with multiple values as we get a big value.

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

var dailyTemperatures = function (temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length !== 0 && stack[stack.length - 1][0] < temperatures[i]) {
      const [temp, idx] = stack.pop();
      result[idx] = i - idx;
    }
    stack.push([temperatures[i], i]);
  }

  return result;
};

// slightly cleaner with slightly better space complexity.  Instead of saving the temperature, we can just save the index in our stack and use our original temperatures array for the comparison

var dailyTemperatures = function (temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length !== 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }

  return result;
};

console.log(dailyTemperatures(temperatures));
