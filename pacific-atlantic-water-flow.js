/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  let rows = heights.length;
  let cols = heights[0].length;
  let res = [];
  let pacific = false;
  let atlantic = false;

  function dfs(x, y, prev) {
    if (x < 0 || y < 0) {
      pacific = true;
      return;
    }
    if (x >= rows || y >= cols) {
      atlantic = true;
      return;
    }
    if (heights[x][y] == -1) return;

    if (prev > heights[x][y]) return;

    prev = heights[x][y];
    heights[x][y] = -1;

    dfs(x + 1, y, prev);
    dfs(x - 1, y, prev);
    dfs(x, y + 1, prev);
    dfs(x, y - 1, prev);
    heights[x][y] = prev;
    return false;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dfs(i, j, 0);
      if (atlantic && pacific) res.push([i, j]);
      pacific = false;
      atlantic = false;
    }
  }
  return res;
};
