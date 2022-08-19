/*
pretty interesting problem and way that we can apply binary search
the first thing we need to realize is that the possible answer is a range from 1 to the highest number 
so like the output for example 2 is 30.  Now we can use binary search to help us find the answer between 
1 and the largest number in piles.  

So first figure out what is the largest pile using a for loop.  Then use binary search with min max.  The 
while loop does min < max instead of min <= max.  Not exactly sure why.  We then calculate our speed using a for loop
to go through each pile at the current speed.  Then use the speed to check whether if this equals our h.  If it's 
greater than h then we will adjust the min.  If it's less than h, then we adjust the max. Not sure why we don't use 
mid - 1 for the max and instead just set it to max.  
*/

// const piles = [3, 6, 7, 11],
//   h = 8;

// const piles = [30, 11, 23, 4, 20],
//   h = 5;

const piles = [600],
  h = 500;

var minEatingSpeed = function (piles, h) {
  let largest_pile = 0;
  for (let i = 0; i < piles.length; i++) {
    largest_pile = Math.max(piles[i], largest_pile);
  }

  let mid = 0;

  //   console.log(largest_pile);
  let min = 1;
  let max = largest_pile;

  while (min < max) {
    mid = Math.floor((min + max) / 2);

    let speed = 0;

    for (let i = 0; i < piles.length; i++) {
      speed = speed + Math.ceil(piles[i] / mid);
    }

    // console.log(speed);
    // console.log("mid " + mid);
    // console.log("min " + min);
    // console.log("max " + max);
    if (speed > h) {
      min = mid + 1;
    } else if (speed <= h) {
      max = mid;
    }
  }
  return max;
};

console.log(minEatingSpeed(piles, h));
