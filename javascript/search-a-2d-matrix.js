// basically you want to do a double binary search so it'll be O(logn + logm)
// the second binary search is a normal one, the first one you are adjusting the binary search that you are checking if the number is within a specific array
// so you are going to do the binary search based on the first index of the array and the last index of the array, if it's bigger than the last, then increase
// if it's less than the first index then decrease.  Eventually it should give us the correct row where the target is in the array's range.

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 30;

// const matrix = [[1]],
//   target = 0;

var searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let top = 0,
    bot = rows - 1;
  while (top <= bot) {
    row = Math.floor((top + bot) / 2);
    if (target > matrix[row][cols - 1]) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bot = row - 1;
    } else {
      break;
    }
  }
  //   console.log("row " + row);
  let left = 0;
  right = cols - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target > matrix[row][mid]) {
      left = mid + 1;
    } else if (target < matrix[row][mid]) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};

console.log(searchMatrix(matrix, target));
