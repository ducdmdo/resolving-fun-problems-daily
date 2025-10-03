import "package:collection/collection.dart";

class Solution {
  int findKthLargest(List<int> nums, int k) {
    PriorityQueue<int> minHeap = PriorityQueue<int>((a, b) => a.compareTo(b));
    for (int i = 0; i < k; i++) {
      minHeap.add(nums[i]);
    }

    for (int i = k; i < nums.length; i++) {
      if (nums[i] > minHeap.first) {
        minHeap.removeFirst();
        minHeap.add(nums[i]);
      }
    }

    return minHeap.first;
  }
}

//[3,2,1,5,6,4]
// => [ 2, 3]
// => [2, 3] - i = 2
// => [ 3, 5] - i = 3
// => [ 5, 6] - i = 4
// => [ 5, 6] - i = 5
