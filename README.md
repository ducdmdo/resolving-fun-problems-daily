# resolving-fun-problems-daily
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
  
