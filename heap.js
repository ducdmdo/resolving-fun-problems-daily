class Heap {
    // private heap
    #heap = [];

    //return a cope of Heap
    getHeap() {
        return [...this.#heap];
    }
    #leftChild(index){
        return 2 * index + 1;
    }
    #rightChild(index){
        return 2 * index + 2;
    }

    #parent(index){
        return Math.floor((index-1) / 2);
    }

    #swap(index1, index2){
        [this.#heap[index1], this.#heap[index2]] = [[this.#heap[index2]], [this.#heap[index1]]];
    }
    #sinkDown(index){

    }

    insert(value){
        //insert to the tail of the array
        this.#heap.push(value);
        //capture the item just added to the tail of the array
        let current = this.#heap.length - 1;

        // Move the current up to the right approriate position
        //the current (which is the latest index above) already moved up to the top & the current should be larger than its parent
        while(current > 0 && this.#heap[current] > this.#heap[this.#parent(current)]) {
            this.#swap(current, this.#parent(current));
            current = this.#parent(current);
        }

    }
    insertBubbleUp(value){
        this.#heap.push(value);

        let currentIdex = this.#heap.length-1;
        let currentValue = this.#heap[currentIdex];

        while(currentIdex > 0) {
            let parentIdx = Math.floor((currentIdex-1)/2);
            let parentValue = this.#heap[parentIdx];

            if (currentValue <= parentValue) break; // do nothing as the-order is all good.

            //swap
            this.#heap[parentIdx] = currentValue;
            this.#heap[currentIdex] = parentValue;
            currentIdex = parentIdx;

        }

    }
    remove(){ // Remove the top node
        if(this.#heap.length === 0) {
            return null;
        }
        if (this.#heap.length === 1) {
            return this.#heap.pop();
        }

        const maxValue = this.#heap[0];
        this.#heap[0] = this.#heap.pop();
        this.#sinkDown(0);

        return maxValue;

    }
}
const myHeap = new Heap();

myHeap.insertBubbleUp(99);
myHeap.insertBubbleUp(72);
myHeap.insertBubbleUp(61);
myHeap.insertBubbleUp(58);

console.log(myHeap.getHeap());

myHeap.insertBubbleUp(100);
console.log(myHeap.getHeap());

myHeap.insertBubbleUp(75);
console.log(myHeap.getHeap());