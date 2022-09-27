function wallsAndGates(rooms) {
  let rows = rooms.length;
  let cols = rooms[0].length;

  let queue = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (rooms[i][j] == 0) {
        queue.push([i, j]);
      }
    }
  }
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let counter = 1;
  while (queue.length) {
    let queue_length = queue.length;
    for (let i = 0; i < queue_length; i++) {
      let [r, c] = queue.shift();
      for (let j = 0; j < directions.length; j++) {
        let row = r + directions[j][0];
        let col = c + directions[j][1];
        if (
          row < 0 ||
          col < 0 ||
          row >= rows ||
          col >= cols ||
          rooms[row][col] == -1 ||
          rooms[row][col] == 0
        )
          continue;
        if (rooms[row][col] < counter) continue;
        rooms[row][col] = counter;
        queue.push([row, col]);
      }
    }
    counter++;
  }
}
