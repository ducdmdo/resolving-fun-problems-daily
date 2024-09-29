/**
 * Graph = {
 *  key:[],
 *  key:[]
 * }
 */

class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    printGraph() {
        if (Object.keys(this.adjacencyList).length !== 0) {
            console.log("{");
            for (const [key, value] of Object.entries(this.adjacencyList)) {
                console.log(" ", `${key}: ${value}`);
            }
            console.log("}");
        } else {
            console.log("{}");
        }
    }

    addVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;

    }

    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){

            this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
            .filter(v => v !== vertex2)

            this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
            .filter(v => v !== vertex1);

            return true;
        }
        return false;
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return undefined;

        //remove related Edge/connection first
        while(this.adjacencyList[vertex].length) {
            let temp = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, temp);
        }
        //delete vetex/node
        delete this.adjacencyList[vertex];
        return this;
    }

    breadthFirst(startNode){
        const queue = [startNode];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[startNode] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(element => {
                if (!visited[element]) {
                    visited[element] = true;
                    queue.push(element);
                }
                
            });
        }
        console.log(result);
        return result;

    }


    breadthFirstQueue(startNode){
        const queue = [startNode]; //add first - FirstIn
        const result = [];
        const visited = {};
        visited[startNode] = true; //{'A': true}
        let currentVertex;

        while (queue.length) {
            currentVertex = queue.pop(); //remove tail - FirstOut
            result.push(currentVertex); //[A, B, C, D, E, F]

            this.adjacencyList[currentVertex].forEach(element => { // visit un-meeting neighbor
                if (!visited[element]) { //if not visit then mark visit
                    visited[element] = true; //{'A': True, 'B': True, 'C': True, 'D': True, 'E': True, 'F': True}
                    queue.unshift(element); //['F','E','D','C', 'B']
                }
                
            });
        }
        console.log(result);
        return result;

    }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");


g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

/**
 *          A 
 *        /   \
 *       B     C
 *      /       \ 
 *     D   --    E
 *    /         /
 *   F --------/ 
 * 
 */


g.breadthFirst("A");
g.breadthFirstQueue("A");