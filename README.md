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
- Primitive
    - Integer
    - Characters
    - Boolean
- Non-Primitive
    - Linear Data Structure
      - Array      => Fix size
        - **array.push(i),** **array.pop(i) is costing O(1)** but **array.shift(i) (remove the first item and return it) OR array.unshift(i) is costing O (N)** (add new items as the very first items of the array) because you have to reindex the array
      - Linked List
      - Stack
      - Queue
    - Non-linear Data Structure
      - Trees
      - 
      - Graphs
    - Hash
      - Hash map
      - Hash set

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
  ## Array
  ## TwoPointer
  1. twoSum - two pointer technique - key concept reducing time complexity by turning nested loop to single loop;
     - Basically, using left-pointer and right-pointer
     - Move left-pointer to the right IF sum (left-pointer + right-pointer) > target
     - Move right-pointer to the left IF sum (left-pointer + right-pointer) < target
  ## Greedy Approach
  2. Best time to buy and sell stock
     - Keep tracking the minimum buying prices for entire array
     - then move the pointer to the next position, then calculate if you can make maximum profit
  
