
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    //if (!root) return null;

    let count = 0;
    let result = null;

    function inOrder(node) {
       
        if (node === null || result !== null) return;

        ////recursive case
        inOrder(node.left);

        //process current node
         //base case
        count++;
        if (count === k) {
            result = node.val;
            return;
        }
        //traverse right
        inOrder(node.right);
    }

    inOrder(root);
    return result;
};

const root = new TreeNode(3);
root.left = new TreeNode(1)
root.right = new TreeNode(4)
root.left.righ = new TreeNode(2);

//Input: Input: root = [3,1,4,null,2], k = 1
//Output: 1
console.log(kthSmallest(root,1));
kthSmallest(root,1);


//Input: root = [5,3,6,2,4,null,null,1], k = 3
//Output: 3
