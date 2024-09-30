# resolving-fun-problems-daily using Javascript
# Big O cheatsheet: https://www.bigocheatsheet.com/
- O(1)       => You right away access/compute the item
- O(N)       => Linear time, basically you have to go througth each of item from your input
- O (log N)  => Basically, very flat and efficiency. It is (log N = 2^x), x is number of time you cut the number N by half. Example log 8 = 3, you cut 8 - 3 times to find out the result. Basically, you cut and throw away 50% of your input and only iterate with remaining 50% items then throwing away 50% again until you find out (or not able to find out) your items. Log (N) is powerful and efficiency. **Proportional**
- O (N log N) => Using in some Sorting algorithms. If you have to sort String, this is the best you can do to sort string. **Divide and Conquer**
- O (N^2)    => Nested loop. **Loop within a loop**
- O (N^3)    => Tripped loop nested
- O (2^N)    => Every node - you have to proceed twice; so bad, can not even function
- O (N!)     => Try to find out all the permutations & combination for the given input sizes; so bad, can not even function

# Data Structure
## Primitive
    - Integer
    - Characters
    - Boolean
## Non-Primitive
 ### Linear Data Structure
 #### 1. Array (Fix size)
      array.push(i),** **array.pop(i) is costing O(1)** but **array.shift(i) (remove the first item and return it) OR array.unshift(i) is costing O (N)** (add new items as the very first items of the array) because you have to reindex the array
#### 2. Linked List
##### Single LinkedList
          **Big O**
          - Removing an item from the tail end => cost us O(N); Because we have to start at the beginning of the Linked List an iterate through to the end.
          
          - Removing an item from the beginning => cost us O(1); This is a place where Linked Lists are better than Arrays. Arrays are O(n) when removing the first item because of the reindexing that is required.
          
          - Finding an item by index => cost us 0(N); You have to iterate through the Linked List until you get to the index you are looking for.
          - Getting node at _index position_ => You need to iterate to the Nth position; so it costs O(N)
          Poping the tail node => You have to iterate throught the list until you get to the tail, so it costs O(N)
            
          - Deleting/addition a node **at index position** - quite a lot of edge cases
              Let's create a new tempNode separately (let tempNode = new ListNode(-Infinity)). Then point to the 'head' node
              Let's create another 3 nodes - previousNode, currentNode, nextNode
              Move the nextNode to the Nth position
              Keep track of let removedNode = head; let prevNode = tempNode;
              Use the nextNode to iterate through the linkedlist, until the nextNode points to Null
              Then move along 3 nodes accordingly
              Then disconnect the 'removedNode'
          - Reversing is the basic and quite interesting - using 3 nodes moving
              Swap head and tail - Use tempNode to swap head and tail
              Create prevNode & nextNode
              Move 3 nodes accordingly to reverse the linkedlist
                        - nextNode = tempNode.next
                        - tempNode.next = prevNode
                        - prevNode = tempNode
                        - tempNode = nextNode
##### Double LinkedList
      -     Getting node at **index position**
          Taking the advantage of the double linkedlist; so it costs Log N
                Divide the linkedlist into half. linkedlist.length/2
                  if the expected index < length/2
                   then you should only iterate in the first half
                      if the expected index > length/2
                         then you should only iterate in the second half
              Popping the tail node; as it is double linkedlist
              Basically, you can directly pop from the tail, so it costs O(1)
#### 3. Queue & Stack


### Non-linear Data Structure
#### 4. Binary Heaps
##### WHY
      - Binary heaps is used to implement priority queues which is a common data structure.
      - Binary heaps is used quite a lot with graph traversal
      
#### 5. Trees
      Big O
      A full, perfect and complete BST is actually a 'Divide and Conquer' approach
      Inserting into a BST is typically O(Log N) (worse case O(N) when BST is a linkedlist)
      Full, perfect and complete BST will benefit - lookup, insert, delete with O(log N)
         
      Breadth First Search
          Iterative approach - Use a 'queue' to temporary keep a node then shift that node and put into a 'array' to keep all nodes of the tree.
            currentNode = this.root
            queue.push(currentNode)
            While (queue.length) 
                {currentNode = queue.shift; 
                resultsArray.push(currentNode); 
                then if there is a left node then **push** into the queue; if there is a right node then push into the queue}
      Depth First Search
          PreOrder
            Use recursion; visit/capture the root.Node then visit/**capture** the left and right nodes
          PostOrder
            Use recursion - Go throught all the node to very left node, **capture** the left node first
          InOrder
            Use recursion - Go to the parent node to the the left node then **capture** then go to the right node
#### 6. Graphs
      -     Big O
          Adding a Vertex (Node) in a Graph with an Adjacency List is O(1) as a vertex (node) is represented as a key in an object. Key lookup in an object is O(N)
          Removing a vertex(Node) is O(K) as you have to remove all of the edges associated with the vertex you are removing
#### 7. HashMap

# Algorithms/Technique
## Recursion
  1. Return an obvious result for the base case, then you're able to exit of the stackoverflow
  2. Return recursive cases appropriately. Note: recursive case always is the smaller case with the original case
## Dynamic Programing
  Dynamic programming - **top down recursive approach** - has 2 properties
  1. Overlapping subproblems which is repeated subproblems
     - **Notes**: Top down recursive => you go backward from the right to the left (OR from top-down)
     - First calculate the sub-problems
     - After you calculate one subproblem, you store (**memoization**) it then when you meet it again => you can reuse the result, so don't need to re-calculate the same/repeated/duplicated subproblems so saving time
     - Keep going-on if you meet a new sub-problems, then calculate and store it 
  2. Optimal subproblems
     - Each sub-problem need to be optimize, so you overral problem is optimized
       
  Dynamic programming - iterative** bottom-up approach** - you go throught the iterative but don't need to memorize the previous result as storing result will cost memory/space
     - **Notes**: bottom-up approach => you go from left to right, calculate/compute the simple sub-problems first
     - First calculate the sub-problems
     - Iterate throught the loop ( don't need to add the sub-problems in the loop as you already resolved it)
     - Return the result out of the loop
 
  ## TwoPointer
  1. twoSum - two pointer technique - key concept reducing time complexity by turning nested loop to single loop;
     - Basically, using left-pointer and right-pointer
     - Move left-pointer to the right IF sum (left-pointer + right-pointer) > target
     - Move right-pointer to the left IF sum (left-pointer + right-pointer) < target
  ## Greedy Approach
  2. Best time to buy and sell stock
     - Keep tracking the minimum buying prices for entire array
     - then move the pointer to the next position, then calculate if you can make maximum profit
  
