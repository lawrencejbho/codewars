var floodFill = function (image, sr, sc, color) {
  let val = image[sr][sc];
  if (val == color) return image;

  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= image.length || y >= image[0].length) return;
    if (image[x][y] == val) {
      image[x][y] = color;
      dfs(x + 1, y);
      dfs(x - 1, y);
      dfs(x, y + 1);
      dfs(x, y - 1);
    } else {
      return;
    }
  }

  dfs(sr, sc);
  return image;
};
