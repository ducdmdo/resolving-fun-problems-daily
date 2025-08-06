class Solution {
  /// Finds the maximum number of operations possible to remove pairs of numbers
  /// from the list that sum up to `k`.
  ///
  /// The function sorts the input list and uses a two-pointer approach
  /// to efficiently find pairs.
  ///
  /// Args:
  ///   nums: A list of integers.
  ///   k: The target sum for each pair.
  ///
  /// Returns:
  ///   The maximum number of operations.
  int maxOperations(List<int> nums, int k) {
    // 1. Sort the array to use the two-pointer approach efficiently.
    // Sorting allows us to move pointers inward based on the sum comparison.
    nums.sort();

    int leftPointer = 0;
    int rightPointer = nums.length - 1;
    int operationsCount = 0;

    // 2. Use a two-pointer approach.
    // The loop continues as long as the left pointer is to the left of
    // the right pointer.
    while (leftPointer < rightPointer) {
      final currentSum = nums[leftPointer] + nums[rightPointer];

      if (currentSum == k) {
        // If the sum equals k, we found a valid pair.
        // Increment the count of operations and move both pointers inward.
        operationsCount++;
        leftPointer++;
        rightPointer--;
      } else if (currentSum < k) {
        // If the sum is less than k, we need a larger sum.
        // Increment the left pointer to try a larger number.
        leftPointer++;
      } else {
        // If the sum is greater than k, we need a smaller sum.
        // Decrement the right pointer to try a smaller number.
        rightPointer--;
      }
    }

    return operationsCount;
  }
}

void main() {
  final solution = Solution();

  // Test cases
  List<({List<int> nums, int k, int expected})> testCases = [
    (nums: [1, 2, 3, 4], k: 5, expected: 2), // (1,4), (2,3)
    (
      nums: [3, 1, 3, 4, 3],
      k: 6,
      expected: 1,
    ), // (3,3) - only one pair of 3s possible
    (
      nums: [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4],
      k: 2,
      expected: 2,
    ), // (1,1), (1,1)
    (nums: [1, 1, 1, 1], k: 2, expected: 2), // (1,1), (1,1)
    (nums: [1, 5, 6, 2, 3, 4], k: 7, expected: 3), // (1,6), (2,5), (3,4)
    (nums: [1, 1, 1, 1, 1, 1], k: 2, expected: 3), // 3 pairs of (1,1)
    (nums: [], k: 10, expected: 0), // Empty list
    (nums: [7], k: 7, expected: 0), // Single element list
    (nums: [1, 2, 3], k: 10, expected: 0), // No pairs sum to k
  ];

  for (var i = 0; i < testCases.length; i++) {
    final test = testCases[i];
    final result = solution.maxOperations(
      List.of(test.nums),
      test.k,
    ); // Use List.of to pass a copy
    print('Test ${i + 1}:');
    print('  Input: nums=${test.nums}, k=${test.k}');
    print('  Result: $result');
    print('  Expected: ${test.expected}');
    print('  Status: ${result == test.expected ? 'PASS' : 'FAIL'}');
    print('');
  }
}
