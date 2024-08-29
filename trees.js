// A node in the Tree contains value, lelf pointer & right pointer
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
}


let myBST = new BST();

myBST.insert(47);
myBST.insert(21);
myBST.insert(76);
myBST.insert(18);
myBST.insert(27);
myBST.insert(52);
myBST.insert(82);

myBST.contains(27)