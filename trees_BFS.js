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

    // This is insert the whole Node which is including: value, left pointer, right pointer
    // input para is just a value
    insert(value) {
        let newNode = new Node(value);
        //if the BST is null
        if (!this.root) {
            //temp points to new node
            this.root = newNode;
            return this;
        }

        let temp = this.root;
        //Use temp to move to the appropirate node then compare value
        //if the BST is not null
        while(true) {
            if (newNode.value === temp.value) return undefined; // if value of newNode equal root.value
            if (newNode.value < temp.value) {
                if (temp.left === null){ // if the left pointer is null
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left; // keep iterate throught the left side on the BST
            }
            if (newNode.value > temp.value) {
                if(temp.right === null) { // if the right pointer is null 
                    temp.right = newNode;
                    return this;
                } 
                temp = temp.right;
            }
        }
    }
    contains(value) { // here is actually we only take the value and compare with the Node.value in the existing BST
        // If the BST is null
        if (!this.root) return false;
        // If the BST is not null
        //Use temp to move to the appropirate node then compare value
        let temp = this.root;
        while(temp){
            if(value === temp.value) return true;
            if (value < temp.value) {
                temp = temp.left;
            }else if (value > temp.value){
                temp = temp.right;
            }

        }
        return false;
    }

    BFS(){
        // Use currentNode to hold the root node
        let currentNode = this.root;

        // use queue array to temporary hold the Node the you pop out from the tree
        let queue = [];

        // use result array to hold value from the node
        let results = [];

        //keep the currentNode in queue;
        queue.push(currentNode);

        while(queue.length) {
            //1. pop out the current node in queue
            currentNode = queue.shift();

            //2. Keep value of the currentNode in resultes array
            results.push(currentNode.value);

            //3. if the left & right node exist, add to the queue
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        return results;
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


