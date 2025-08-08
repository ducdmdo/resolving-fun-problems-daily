import 'dart:math' as Math;

class Solution {
  int maxArea(List<int> height) {
    int result = 0;
    int leftPointer = 0;
    int rightPointer = height.length - 1;
    int minHeight = 0;
    int storingWater = 0;

    //Condidition
    while (leftPointer < rightPointer) {
      //Find min height
      minHeight = Math.min(height[leftPointer], height[rightPointer]);

      //find water storing
      storingWater = minHeight * (rightPointer - leftPointer);

      //Hold result which should be max
      result = Math.max(result, storingWater);

      if (height[leftPointer] < height[rightPointer]) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }

    return result;
  }
}
