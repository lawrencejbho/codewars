// O(n)

// suprisingly got this on my first try, basically we two pointers method from left and right
// because the area is determined by the smaller of the two lines, we want to find the lines that are the largest
// and then stick with that large line so that we can hopefully find larger lines in the future
// easy formula to determine the area, use a running variable to track the max area
// the algo except is super easy, if one height is larger, change the others pointer
// for the else condition (where heights equal), it doesn't really matter what we increment because they are the same
// height so no advantage on either side

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
  let highestArea = 0;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    let currentArea = (j - i) * Math.min(height[i], height[j]);
    highestArea = Math.max(currentArea, highestArea);
    if (height[i] < height[j]) {
      i++;
    } else if (height[j] < height[i]) {
      j--;
    } else {
      i++;
    }
  }
  return highestArea;
};

console.log(maxArea(height));
