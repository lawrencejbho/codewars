// apparently most people don't solve this problem but it's a good problem to know

// first need to sort the position and speed together and can put them into one array using map.  the reason we need to sort is that it's a one car lane.  So even if something has crazy speed,
// it'll still join up with the car in front of it. Iterate going backwards should be easier for crashes.
// Next we're able to calculate each cars time to make it to the finish using the (target - position) / speed. aka seconds needed to finish.

// If the next car has a lesser value(less in this case means faster) than the one in our stack, then it'll join up and make a car fleet with the slower car.
// so we can just pop that new value from our stack and continue using the last car's value as our car fleet.
// keep adding new cars and as long as the calculated value is greater

const target = 12,
  position = [10, 8, 0, 5, 3],
  speed = [2, 4, 1, 1, 3];

function carFleet(target, position, speed) {
  const combined = position
    .map((item, index) => {
      return [item, speed[index]];
    })
    .sort((a, b) => a[0] - b[0]);

  const stack = [];

  for (let i = combined.length - 1; i > -1; i--) {
    const p = combined[i][0];
    const s = combined[i][1];

    stack.push((target - p) / s);

    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }

  return stack.length;
}

// console.log(carFleet2(target, position, speed));

// rewrote the problem from memory

function carFleet2(target, position, speed) {
  const combined = position
    .map((value, index) => [value, speed[index]])
    .sort((a, b) => a[0] - b[0]);

  console.log(combined);

  const stack = [];

  for (let i = combined.length - 1; i > -1; i--) {
    let p = combined[i][0];
    let s = combined[i][1];

    stack.push((target - p) / s);

    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
    console.log(stack);
  }
  return stack.length;
}

console.log(carFleet2(target, position, speed));
