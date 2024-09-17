const solution = (connections, name1, name2) => {
    // Create an adjacency list to represent the graph
    const graph = new Map();
    
    // Build the graph from the connections
    for (const [friend1, friend2] of connections) {
      if (!graph.has(friend1)) graph.set(friend1, []);
      if (!graph.has(friend2)) graph.set(friend2, []);
      graph.get(friend1).push(friend2);
      graph.get(friend2).push(friend1);
    }
    
    // If either name is not in the graph, return -1
    if (!graph.has(name1) || !graph.has(name2)) return -1;
    
    // Queue for BFS
    const queue = [[name1, 0]];
    // Set to keep track of visited nodes
    const visited = new Set([name1]);
    
    // BFS
    while (queue.length > 0) {
      const [currentName, distance] = queue.shift();
      
      // If we've reached the target, return the distance
      if (currentName === name2) return distance;
      
      // Explore neighbors
      for (const neighbor of graph.get(currentName)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, distance + 1]);
        }
      }
    }
    
    // If we've exhausted the queue without finding name2, they're not connected
    return -1;
  };

  const connections = [
    ["Alice", "Bob"],
    ["Bob", "Charlie"],
    ["Charlie", "David"],
    ["David", "Eve"],
    ["Eve", "Frank"],
    ["Frank", "George"]
  ];
  
  console.log(solution(connections, "Alice", "George")); // Output: 5
  console.log(solution(connections, "Alice", "Alice")); // Output: 0
  console.log(solution(connections, "Alice", "Harry")); // Output: -1