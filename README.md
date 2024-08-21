# resolving-fun-problems-daily
# Big O
O(1)       => You right away access/compute the item
O(N)       => Linear time, basically you have to go througth each of item from your input
O (log N)  => Basically, you cut and throw away 50% of your input and only iterate with remaining 50% items then throwing away 50% again until you find out (or not able to find out) your items
O (N^2)    => Nested loop
O (N^3)    => Tripped loop nested
O (2^N)    => Every node - you have to proceed twice; so bad, can not even function
O (N!)     => Try to find out all the permutations & combination for the given input sizes; so bad, can not even function
# Array
  ## TwoPointer
  1. twoSum - two pointer technique - key concept reducing time complexity by turning nested loop to single loop;
     - Basically, using left-pointer and right-pointer
     - Move left-pointer to the right IF sum (left-pointer + right-pointer) > target
     - Move right-pointer to the left IF sum (left-pointer + right-pointer) < target
  ## Greedy Approach
  2. Best time to buy and sell stock
     - Keep tracking the minimum buying prices for entire array
     - then move the pointer to the next position, then calculate if you can make maximum profit
  
