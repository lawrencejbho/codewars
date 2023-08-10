function orangesRotting(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  let queue = [];
  let minutes = 0;
  let good_orange = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == 2) {
        queue.push([i, j]);
      }
      if (grid[i][j] == 1) {
        good_orange++;
      }
    }
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  while (queue.length && good_orange > 0) {
    let queue_length = queue.length;
    for (let i = 0; i < queue_length; i++) {
      let [r, c] = queue.shift();
      for (let j = 0; j < directions.length; j++) {
        let row = directions[j][0] + r;
        let col = directions[j][1] + c;
        if (
          row < 0 ||
          col < 0 ||
          row >= rows ||
          col >= cols ||
          grid[row][col] != 1
        ) {
          continue;
        }
        grid[row][col] = 2;
        queue.push([row, col]);
        good_orange--;
        // console.log(good_orange);
      }
    }
    minutes++;
  }
  //   console.log(minutes);
  //   console.log(good_orange);
  return good_orange == 0 ? minutes : -1;
}
