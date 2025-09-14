import 'dart:collection';
import 'dart:html_common';

class Graph<T> {
  final Map<T, Map<T, bool>> _adjacencyMatrix;

  final Set<T> _nodes;

  Graph() : _adjacencyMatrix = HashMap<T, Map<T, bool>>(), _nodes = <T>{};

  void addNode(T node) {
    if (!_nodes.contains(node)) {
      _nodes.add(node);

      _adjacencyMatrix[node] = HashMap<T, bool>();

      for (final otherNode in _nodes) {
        if (otherNode != node) {
          _adjacencyMatrix[node]![otherNode] = false;
          _adjacencyMatrix[otherNode]![node] = false;
        } else {
          _adjacencyMatrix[node]![node] = false;
        }
      }
    }
  }

  void addEdge(T node1, T node2) {
    addNode(node1);
    addNode(node2);

    _adjacencyMatrix[node1]![node2] = true;
    _adjacencyMatrix[node2]![node1] = true;
  }
}
