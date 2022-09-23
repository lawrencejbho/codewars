function numIslands(grid) {
  if (grid.length == 0) return 0;

  let rows = grid.length;
  let cols = grid[0].length;
  let visit = new Set();
  let islands = 0;

    def bfs(r,c) {

        let queue = [collections.deque()]
        visit.add(`${r}+${c}`)
        queue.push(`${r}+${c}`)

        while (queue.length)
            row = 
            directions = [[1,0], [-1,0], [0,1], [0,-1]]

            for (dr,dc in directions) { 
                if ((r+dr) in rows.length() && (c+dc) in cols.length() && )
            }
    }


  for (let i = 0; i < rows; i++) {
    for (letj = 0; j < cols; j++) {
      if (grid[r][c] == "1" && !visit.has(`${r}+${c}`)) {
        bfs(r, c);
        islands += 1;
      }
    }
  }
  return islands
}
