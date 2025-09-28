import 'dart:collection';

class Solution {
  int nearestExit(List<List<String>> maze, List<int> entrance) {
    final int m = maze.length;
    final int n = maze[0].length;

    // define movements: up, down, left, right
    final List<int> dr = [-1, 1, 0, 0]; // change in row
    final List<int> dc = [0, 0, -1, 1]; // change in column

    //keep track of visited cells to prevent cycles and redundant computation
    final List<List<bool>> visited = List.generate(
      m,
      (_) => List.filled(n, false),
    );

    //queue for bfs
    final Queue<List<int>> queue = Queue();

    final int startR = entrance[0];
    final int startC = entrance[1];

    //add the entrance cell to the queue with 0 steps
    queue.add([startR, startC, 0]);

    // Mark the entrance cell as visited
    visited[startR][startC] = true;

    //perform BFS
    while (queue.isNotEmpty) {
      final List<int> current = queue.removeFirst();
      final int r = current[0];
      final int c = current[1];
      final int steps = current[2];

      //Check if the current cell is an exist.
      //An exist is the border (r=0, r=m-1, c=0, c=n-1)
      // And it's not the entrance itself

      if ((r == 0 || r == m - 1 || c == 0 || c == n - 1) &&
          (r != startR || c != startC)) {
        return steps;
      }

      for (int i = 0; i < 4; i++) {
        final int nextR = r + dr[i];
        final int nextC = c + dc[i];

        if (nextR >= 0 && nextR < m && nextC >= 0 && nextC < n) {
          //check if the neighbor is an empty cell ('.') and has not been visited.
          if (maze[nextR][nextC] == '.' && !visited[nextR][nextC]) {
            visited[nextR][nextC] = true;

            // add the neighbor to the queue with the incremented step count.
            queue.add([nextR, nextC, steps + 1]);
          }
        }
      }
    }
    return -1;
  }
}
