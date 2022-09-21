/* 
most intuitive solution
*/

function exist(board, word) {
  let rows = board.length;
  let cols = board[0].length;

  function dfs(r, c, i) {
    // out of the board
    if (r < 0 || c < 0 || r >= rows || c >= cols) {
      return false;
    }
    // wrong character
    if (word[i] != board[r][c]) {
      return false;
    }
    if (i == word.length - 1) {
      return true;
    }

    // check from our current cell then dfs
    board[r][c] = null;

    let result =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    board[r][c] = word[i];

    return result;
  }

  // have to check on each cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] == word[0]) {
        if (dfs(i, j, 0)) return true;
      }
    }
  }
  return false;
}

/* 
returning result instead
*/

function exist(board, word) {
  let rows = board.length;
  let cols = board[0].length;
  let result = false;

  function dfs(r, c, i) {
    if (r < 0 || c < 0 || r >= rows || c >= cols) {
      return;
    }
    // wrong character
    if (word[i] != board[r][c]) {
      return;
    }
    if (i == word.length - 1) {
      result = true;
      return;
    }

    board[r][c] = null;

    dfs(r + 1, c, i + 1);
    dfs(r - 1, c, i + 1);
    dfs(r, c + 1, i + 1);
    dfs(r, c - 1, i + 1);

    board[r][c] = word[i];
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] == word[0]) {
        dfs(i, j, 0);
        if (result) return result;
      }
    }
  }
  return result;
}

/* 
This is neetcode's solution using a set() to check for the last value, but the runtime is extremely long.  It might be because there's no tuple so lookups are bad.  
The concept does make a ton of sense though.
*/
function exist(board, word) {
  let rows = board.length;
  let cols = board[0].length;
  let path = new Set();

  function dfs(r, c, i) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || path.has(`${r}, ${c}`)) {
      return false;
    }
    // wrong character
    if (word[i] != board[r][c]) {
      return false;
    }
    if (i == word.length - 1) {
      return true;
    }
    path.add(`${r}, ${c}`);

    let result =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    path.delete(`${r}, ${c}`);

    return result;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
}
