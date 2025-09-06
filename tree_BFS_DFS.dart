import 'dart:collection';

class TreeNode {
  int value;
  TreeNode? left;
  TreeNode? right;

  TreeNode(this.value, {this.left, this.right});

  List<int> bfs(TreeNode? root) {
    if (root == null) return [];

    final List<int> result = [];
    final Queue<TreeNode> queue = Queue<TreeNode>();
    queue.add(root);

    while (queue.isNotEmpty) {
      final TreeNode currentNode = queue.removeFirst(); // Dequeue
      result.add(currentNode.value);

      print(currentNode.value);

      //check left child
      if (currentNode.left != null) {
        queue.add(currentNode.left!);
      }

      //check right child
      if (currentNode.right != null) {
        queue.add(currentNode.right!);
      }
    }
    return result;
  }

  List<int> dfs(TreeNode? root) {
    final List<int> result = [];
    if (root == null) {
      return [];
    }

    final stack = Queue<TreeNode>();
    stack.add(root);

    while (stack.isNotEmpty) {
      final currentNode = stack.removeLast(); // Pop from stack

      print(currentNode.value);

      //Push right child first so left child is processed first (FILO)
      if (currentNode.right != null) {
        stack.add(currentNode.right!);
      }

      if (currentNode.left != null) {
        stack.add(currentNode.left!);
      }
    }
    return result;
  }
}

List<int> dfsPreOrder(TreeNode? root) {
  final List<int> result = [];

  void _traverse(TreeNode? node) {
    if (node == null) {
      return;
    }
    //Pre=order: Root, Left, Right
    result.add(node.value);
    _traverse(node.left);
    _traverse(node.right);
  }

  _traverse(root);

  return result;
}

List<int> dfsInOrder(TreeNode? root) {
  final List<int> result = [];

  void _traverse(TreeNode? node) {
    if (node == null) {
      return;
    }
    // In-order: Left -> Root -> Right
    _traverse(node.left);
    result.add(node.value);
    _traverse(node.right);
  }

  _traverse(root);

  return result;
}

List<int> dfsPostOrder(TreeNode? root) {
  final List<int> result = [];

  void _traverse(TreeNode? node) {
    if (node == null) {
      return;
    }

    //Post-order: Left -> right -> Root

    _traverse(node.left);
    _traverse(node.right);
    result.add(node.value);
  }

  _traverse(root);

  return result;
}

void main() {
  final TreeNode root = TreeNode(
    1,
    left: TreeNode(2, left: TreeNode(4), right: TreeNode(5)),
    right: TreeNode(3, right: TreeNode(6)),
  );

  //Perform DFS (Post-order)
  final List<int> dfsPostOrderResult = dfsPostOrder(root);

  print('DFS Traversal Post Order: $dfsPostOrderResult');
}
