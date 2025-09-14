import 'dart:collection';

class Solution {
  int provinces = 0;
  final Set<int> visited = <int>{};

  //helper function
  void dfs(int startCity, List<List<int>> isConnected) {
    visited.add(startCity);
    for (int j = 0; j < isConnected.length; j++) {
      if (isConnected[startCity][j] == 1 && (!visited.contains(j))) {
        dfs(j, isConnected);
      }
    }
  }

  int findCircleNum(List<List<int>> isConnected) {
    final int n = isConnected.length;

    if (isConnected.isEmpty) {
      return 0;
    }

    //Iterate through all cities.
    for (int i = 0; i < n; i++) {
      //If a city has not been visited
      if (!visited.contains(i)) {
        provinces++;
        dfs(i, isConnected);
      }
    }

    return provinces;
  }
}
