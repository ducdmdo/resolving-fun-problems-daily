class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this. right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                } 
                temp = temp.right;
            }
        }
    }

    findingMaxValue(root) {

        let maxValue = -Infinity;

        const dfs = (root) => {

            //base case
            if (root.value > maxValue) {
                maxValue = root.value;
            }

            //recursive case
            if ((root.left)) dfs(root.left);
            if (root.right) dfs(root.right);
        }

        dfs(this.root)
        console.log(maxValue);
        return maxValue
        
    }
   
}

let myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);

console.log(myTree);

myTree.findingMaxValue(47);

//     47
//   /    \
//   21    76
//        
//  /  \     / \
//  18  27  52  82


