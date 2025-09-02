//Entiry - Declar TreeNode

class TreeNode<T> {
  T value;
  TreeNode<T>? leftChild;
  TreeNode<T>? rightChild;

  TreeNode(this.value);
}

class BinaryTree<T extends Comparable<Object?>> {
  TreeNode<T>? root;

  void insert(T value) {
    root = _insertRecursive(root, value);
  }

  TreeNode<T> _insertRecursive(TreeNode<T>? node, T value) {
    if (node == null) return TreeNode(value);

    if (value.compareTo(node.value) < 0) {
      node.leftChild = _insertRecursive(node.leftChild, value);
    } else if (value.compareTo(node.value) > 0) {
      node.rightChild = _insertRecursive(node.rightChild, value);
    }

    return node;
  }

  void inOrderTraversal(TreeNode<T>? node) {
    if (node != null) {
      inOrderTraversal(node.leftChild);
      print(node.value);
      inOrderTraversal(node.rightChild);
    }
  }

  void preOrderTraversal(TreeNode<T>? node) {
    if (node != null) {
      print(node.value);
      preOrderTraversal(node.leftChild);
      preOrderTraversal(node.rightChild);
    }
  }

  void postOrderTraversal(node) {
    if (node != null) {
      postOrderTraversal(node.leftChild);
      postOrderTraversal(node.rightChild);
      print(node.value);
    }
  }
}

void main() {
  BinaryTree<int> tree = BinaryTree<int>();

  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);

  print('In-order traversal');
  tree.inOrderTraversal(tree.root);

  print('Pre-order traversal');
  tree.preOrderTraversal(tree.root);

  print('POST-ORDer traversal');
  tree.postOrderTraversal(tree.root);
}
