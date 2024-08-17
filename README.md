# resolving-fun-problems-daily
# Array
  1. twoSum - two pointer technique - key concept reducing time complexity by turning nested loop to single loop;
     - Basically, using left-pointer and right-pointer
     - Move left-pointer to the right IF sum (left-pointer + right-pointer) > target
     - Move right-pointer to the left IF sum (left-pointer + right-pointer) < target
