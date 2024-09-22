const numIslands = (grid) => {
  let m = grid.length,
    n = grid[0].length;

  let isLand = 0;

  let dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const dfs = (i, j) => {
    grid[i][j] = 2;
    let x, y;
    for (let d of dir) {
      x = i + d[0];
      y = j + d[1];

      if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 1) {
        dfs(x, y);
      }
    }
    return;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        isLand++;
      }
    }
  }
  return isLand;
};

numIslands([
  ["1", "1", "1", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["1", "0", "1", "0", "0"],
  ["1", "1", "1", "1", "0"],
]);
