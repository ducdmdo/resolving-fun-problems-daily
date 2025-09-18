import 'dart:collection';

class Solution {
  int _count = 0;

  void _bfs(int startNode, int n, Map<int, List<List<int>>> adj) {
    Queue<int> queue = Queue<int>();
    List<bool> visit = List.filled(n, false);

    queue.add(startNode);
    visit[startNode] = true;

    while (queue.isNotEmpty) {
      int node = queue.removeFirst();
      final currentNeighbors = adj[node] ?? [];
      print('currentNeighbors: $currentNeighbors');

      for (var nei in currentNeighbors) {
        int neighbor = nei[0];
        int sign =
            nei[1]; // 1 if currentCity -> neighbor. O if currentCity <- neighbor
        print('neighbor: $neighbor');
        print('visit:$visit');

        if (!visit[neighbor]) {
          _count += sign;
          visit[neighbor] = true;
          queue.add(neighbor);
        }
      }
    }
  }

  int minReorder(int n, List<List<int>> connections) {
    _count = 0;

    //Adjacent list representation of the graph

    final Map<int, List<List<int>>> adj = HashMap();

    for (var connection in connections) {
      int from = connection[0];
      int to = connection[1];

      // Add the original directed edge: from -> to, marked with 1.
      adj.putIfAbsent(from, () => []).add([to, 1]);

      //Add a conceptual reverse edge: to -> from, marked with 0
      //This allows traversal from 'to' to 'from' during DFS without counting it as a reorder
      adj.putIfAbsent(to, () => []).add([from, 0]);
    }

    // Start the Depth First Search from city 0.
    // City -1 is used as a placeholder for the parent of city 0, as it has no parent.
    //print(adj);
    print(adj);
    _bfs(0, n, adj);

    return _count;
  }
}
