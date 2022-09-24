// the neetcode solution uses a set but that may take some effort as it's hard to save a tuple in js

function numIslands(grid) {
  let count = 0;
  function dfs(x, y) {
    if (y < 0 || y >= grid[0].length || x < 0 || x >= grid.length) {
      return;
    }

    if (grid[x][y] === "1") {
      grid[x][y] = "0";
    } else {
      return;
    }

    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
}
