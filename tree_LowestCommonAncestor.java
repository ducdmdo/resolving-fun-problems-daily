/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        //base case
        if (root == null) return null;

        if (root == p || root == q) return root;

        // Recursively search in the left subtree
        final TreeNode leftLCA = lowestCommonAncestor(root.left, p, q);

          // Recursively search in the right subtree
        final TreeNode rightLCA = lowestCommonAncestor(root.right, p, q);

        // If both leftLCA and rightLCA are non-null, it means p and q were found
        // in different subtrees. The current root is their LCA.
        if (leftLCA != null && rightLCA != null) {
            return root;
        }

        // If only leftLCA is non-null, it means both p and q (or the LCA itself)
        // are in the left subtree.
        if (leftLCA != null) {
            return leftLCA;
        }

        // If only rightLCA is non-null, it means both p and q (or the LCA itself)
        // are in the right subtree.
        if (rightLCA != null) {
            return rightLCA;
        }

        // If both are null, neither p nor q were found in the current subtree.
        return null;
        }


}