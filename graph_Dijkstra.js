class WeightedGraph {
    constructor(){
        this.adacencyList = {}
    }

    addVertext(vertex) {
        if (!this.adacencyList[vertex]) this.adacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        if (this.adacencyList[vertex1] && this.adacencyList[vertex2]) {
            this.adacencyList[vertex1].push({node: vertex2, weight});
            this.adacencyList[vertex2].push({nove: vertex1, weight});
        }
        return false;
    }
}