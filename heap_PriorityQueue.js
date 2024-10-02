class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);

        //push to the queue
        this.values.push(newNode);

        //bubbleUp
        this.bubbleUp();
        
    }
    bubbleUp(){
         
        if (this.values.length === 1) {
            console.log('only one item');
            return true;
        }
        //If there are more than 2 elements in the queue
        let currentNodeIndex = this.values.length - 1;
        let currentNode = this.values[currentNodeIndex];

        while (currentNodeIndex > 0) { // double check to make sure currentNodeIndex is not negative
            let parentNodeIndex = Math.floor((currentNodeIndex - 1)/2);
            let parentNode = this.values[parentNodeIndex];

            if (currentNode.priority >= parentNode.priority) break; // if priority of the new added Node is bigger/lower than the parent Node then we do nothing

            //In case the new added node priority is higher than the parent node then we need to move-up the new added node
            this.values[parentNodeIndex] = currentNode;
            this.values[currentNodeIndex] = parentNode

            //update currentNodeIndex after moving up
            currentNodeIndex = parentNodeIndex;
        }
        
    }

    dequeue() {

        //To maintain worst case time complexity of O log(N)
        //So will swap the tail to the head then sinking down
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown(){
        let index = 0;
        let length = this.values.length;

        while(true) {
            let element = this.values[index];
            let swapIndex = null;

            let leftChildIndex = index * 2 +1;
            let leftChild = this.values[leftChildIndex];

            let rightChildIndex = index * 2 + 2;
            let rightChild = this.values[rightChildIndex];

            if (leftChildIndex < length) {
                if(leftChild.priority < element.priority) {
                    swapIndex = leftChildIndex;
                }
            }

           
            if (rightChildIndex < length) {
                if (
                    (swapIndex === null && rightChild.priority < element.priority) 
                    || 
                    (swapIndex !== null && rightChild.priority < leftChild.priority ) 
                ){
                    swapIndex = rightChildIndex;
    
                }
            }
            
            if (swapIndex === null) break;
            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = element;
            index = swapIndex;

        }
    }

    /**
     * sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
     * 
     */
    

}


let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)
ER.dequeue();