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
    #rInsert(value, currentNode=this.root) {

        //base case
        if (!currentNode) return new Node(value);
        
        if (value < currentNode.value){
            currentNode.left =  this.#rInsert(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.#rInsert(value, currentNode.right);
        }
        return currentNode;

    }
    //Inserting means you insert the whole Node
    rInsert(value){

        //if the tree is null - this is the base case
        if (!this.root) this.root = this.root = new Node(value);
            
        this.#rInsert(value);
    }
    rContains(value, currentNode = this.root){
        
        //if the root is null
        if(!currentNode) return false;

        //if the root.value equals value - this one is the base case
        if (value === currentNode.value) return true;


        //if the value is smaller than the currentNode.value
        if (value < currentNode.value) {
            return this.rContains(value, currentNode.left);
        }//if the value is larger than the currentNode.value
        else if (value > currentNode.value){
            return this.rContains(value, currentNode.right);
        }
    }

    // Find the minimum node and return VALUE of that minmum node
    minValue(currentNode){
        while(currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;

    }

    #deleteNode(value, currentNode){
        if(currentNode === null) return null

        //traverse throught the tree
        if(value < currentNode.value) {
            currentNode.left = this.#deleteNode(value, currentNode.left);
        }else if (value > currentNode.value){
            currentNode.right = this.#deleteNode(value, currentNode.right);
        } else { //whenever we traverse to the right node - there are 4 scenarios we need to cover
            //1. if the left node & right node is null
            if (currentNode.left === null && currentNode.right === null){
                return null; // nothing to delete
            } 
            // 2. if only the left node is null
            else if (currentNode.left === null){
                currentNode = currentNode.left;
            }
            //3. if only the right node is null
            else if (currentNode.right === null) {
                currentNode = currentNode.right;
            }
            //3. if the current node has 2 leaf node which is not null
            else {
                let subTreeMin = this.minValue(currentNode.left);
                currentNode.value = subTreeMin;
                currentNode.right = this.#deleteNode(subTreeMin, currentNode.right);
            }

        }
        return currentNode;

    }
    deleteNode(value){
        this.root = this.#deleteNode(value, this.root);
    }
}

let myBST = new BST();

myBST.rInsert(2);
myBST.rInsert(1);
myBST.rInsert(3);

console.log("\nBefore deleting (2) Node:");
console.log("----------------------------");
console.log("Root:" + myBST.root.value);
console.log("Root->Left:" + myBST.root.left.value);
console.log("Root->right:" + myBST.root.right.value);

myBST.deleteNode(2);

console.log("\n\nAfter deleting (2) Node:");
console.log("-----------------------------");
console.log("Root:" + myBST.root.value);
console.log("Root->left" + myBST.root.left);
console.log("Root->right" + myBST.root.right);

