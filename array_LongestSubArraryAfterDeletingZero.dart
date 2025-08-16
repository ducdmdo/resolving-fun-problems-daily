import 'dart:math';

class Solution {
  int longestSubarray(List<int> nums) {
    //count zero
    //count maxLength
    //count currentLength

    // if zeroCount > 1 => adjust window size
    // maxLength = right - left - 2

    int left = 0;
    int right = 0;
    int zeroCount = 0;
    int maxLength = 0;

    while (right < nums.length) {
      if (nums[right] == 0) zeroCount++;

      if (zeroCount > 1) {
        zeroCount = zeroCount - (nums[left] == 0 ? 1 : 0);
        left++;
      }

      maxLength = max(maxLength, right - left);

      // print('left: $left');
      // print('right: $right');
      // print('maxLength: $maxLength');
      // print('----------------------');

      right++;
    }

    return maxLength;
  }
}
