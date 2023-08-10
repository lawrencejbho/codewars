var maxAreaOfIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let area = 0;

  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= rows || y >= cols) return 0;
    if (grid[x][y] != 1) return 0;

    grid[x][y] = null;
    let result = dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y + 1) + dfs(x, y - 1);

    return 1 + result;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == 1) {
        area = Math.max(area, dfs(i, j));
      }
    }
  }
  return area;
};
