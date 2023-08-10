var solve = function (board) {
  let rows = board.length;
  let cols = board[0].length;

  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= rows || y >= cols) {
      return;
    }

    if (board[x][y] != "O") {
      return;
    }

    board[x][y] = "T";

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (
        board[i][j] == "O" &&
        (i == 0 || i == rows - 1 || j == 0 || j == cols - 1)
      ) {
        dfs(i, j);
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] == "O") {
        board[i][j] = "X";
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] == "T") {
        board[i][j] = "O";
      }
    }
  }

  return board;
};
