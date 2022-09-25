/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  let rows = heights.length;
  let cols = heights[0].length;
  let res = [];
  let pac = new Set();
  let atl = new Set();

  function dfs(x, y, prev, visit) {
    if (
      x < 0 ||
      y < 0 ||
      x >= rows ||
      y >= cols ||
      visit.has(`${x},${y}`) ||
      heights[x][y] < prev
    ) {
      return;
    }

    visit.add(`${x},${y}`);

    dfs(x + 1, y, heights[x][y], visit);
    dfs(x - 1, y, heights[x][y], visit);
    dfs(x, y + 1, heights[x][y], visit);
    dfs(x, y - 1, heights[x][y], visit);
  }

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, -1, pac);
    dfs(r, cols - 1, -1, atl);
  }

  for (let c = 0; c < cols; c++) {
    dfs(0, c, -1, pac);
    dfs(rows - 1, c, -1, atl);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (pac.has(`${i},${j}`) && atl.has(`${i},${j}`)) {
        res.push([i, j]);
      }
    }
  }
  return res;
};
