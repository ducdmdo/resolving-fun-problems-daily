import 'dart:collection';

class Solution {
  int orangesRotting(List<List<int>> grid) {
    // Step-1 collect all Rotten, Fresh and empty oranges
    int Rotten = 2;
    int Fresh = 1;
    int Empty = 0;
    int numberFresh = 0;
    int numberTimes = -1;

    Queue<List<int>> queue = Queue();
    Set<List<int>> visited = {};
    int m = grid.length;
    int n = grid[0].length;
    final List<int> dr = [-1, 1, 0, 0]; // change in row
    final List<int> dc = [0, 0, -1, 1]; // change in column

    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        if (grid[i][j] == Rotten) {
          queue.add([i, j]); //[0,0]
          visited.add([i, j]);
        } else if (grid[i][j] == Fresh) {
          numberFresh += 1; //6
        }
      }
    }

    print('queue:$queue');
    print('visited:$visited');
    //if there are no fresh orange then return 0
    if (numberFresh == Empty) return 0;

    //Step-2: Using BFS handling adjancent oranges become rotten
    while (queue.isNotEmpty) {
      int queueSize = queue.length;

      numberTimes += 1;
      // Run throught adjacent fresh oranges
      for (int index = 0; index < queueSize; index++) {
        final List<int> current = queue.removeFirst();
        final int r = current[0];
        final int c = current[1];

        for (int k = 0; k < 4; k++) {
          int nextR = r + dr[k];
          int nextC = c + dc[k];
          if ((nextR >= 0 && nextR < m && nextC >= 0 && nextC < n) &&
              (grid[nextR][nextC] == Fresh)) {
            grid[nextR][nextC] = Rotten;
            numberFresh -= 1;
            queue.add([nextR, nextC]);
            visited.add([nextR, nextC]);
          }
        }
      }
    }

    if (numberFresh == 0) {
      return numberTimes;
    } else {
      return -1;
    }

    print('m:$m');
    print('n:$n');

    return numberTimes;
  }
}
