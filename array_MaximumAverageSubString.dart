import 'dart:math' as Math;

// Technique: sliding window.

class Solution {
  double findMaxAverage(List<int> nums, int k) {
    int maxValue = 0;
    int currentValue = 0;

    if (k <= 0) {
      return 0.0;
    }

    if (nums.length < k) {
      return 0.0;
    }

    for (int i = 0; i < k; i++) {
      currentValue += nums[i];
    }

    maxValue = currentValue;

    for (int i = k; i < nums.length; i++) {
      currentValue += nums[i] - nums[i - k];
      maxValue = Math.max(currentValue, maxValue);
    }

    return maxValue / k;
  }
}
