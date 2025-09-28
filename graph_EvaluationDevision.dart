class Solution {
  List<double> calcEquation(
    List<List<String>> equations,
    List<double> values,
    List<List<String>> queries,
  ) {
    // process each queies
    List<double> results = [];
    Map<String, Map<String, double>> graph = buildGraph(equations, values);

    print('graph: $graph');
    for (var query in queries) {
      String startVar = query[0];
      String endVar = query[1];

      //undefined start and/or end
      if (!graph.containsKey(startVar) || !graph.containsKey(endVar)) {
        results.add(-1.0);
        continue;
      }

      // if the start and end are the same
      if (startVar == endVar) {
        results.add(1.0);
        continue;
      }

      //Perform DFS to find the path from start to end

      Set<String> visited = <String>{};
      double result = _dfs(startVar, endVar, 1.0, visited, graph);
      results.add(result);
    }
    return results;
  }

  double _dfs(
    String currentVar,
    String targetVar,
    double currentProduct,
    Set<String> visited,
    Map<String, Map<String, double>> graph,
  ) {
    visited.add(currentVar);

    //get the neighbors of the current variable
    Map<String, double>? neighbors = graph[currentVar];
    if (neighbors == null) {
      return -1.0;
    }
    print('neighbors:$neighbors');
    //iterate through each neighbor of the current variable.
    for (var entry in neighbors.entries) {
      print('entry: $entry');
      String neighborVar = entry.key;
      double weight = entry.value;

      if (neighborVar == targetVar) {
        return currentProduct * weight;
      }

      //if the neighbor has not been visited in the current path
      //recursively explore it
      if (!visited.contains(neighborVar)) {
        double result = _dfs(
          neighborVar,
          targetVar,
          currentProduct * weight,
          visited,
          graph,
        );

        if (result != -1.0) {
          return result;
        }
      }
    }
    return -1.0;
  }

  Map<String, Map<String, double>> buildGraph(
    List<List<String>> equations,
    List<double> values,
  ) {
    Map<String, Map<String, double>> graph = {};
    for (int i = 0; i < equations.length; i++) {
      String startNode = equations[i][0];
      String destNode = equations[i][1];
      double val = values[i];

      graph.putIfAbsent(startNode, () => {});
      graph.putIfAbsent(destNode, () => {});

      //Add the directed edges with their corresponding weights
      graph[startNode]![destNode] = val;
      graph[destNode]![startNode] = 1.0 / val;
    }

    return graph;
  }
}


//equations = [["a","b"],["b",c"]], values = [2.0,3.0]

/**
   2.0       3.0
a - - - -> b - - - -> c
| - - - - -|
    0.5

 */