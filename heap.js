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

myHeap.insert(99);
myHeap.insert(72);
myHeap.insert(61);
myHeap.insert(58);

console.log(myHeap.getHeap());

myHeap.insert(100);
console.log(myHeap.getHeap());

myHeap.insert(75);
console.log(myHeap.getHeap());