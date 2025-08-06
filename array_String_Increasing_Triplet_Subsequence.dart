class Solution {
  bool increasingTriplet(List<int> nums) {
    int min1 = 9007199254740991;
    int min2 = 9007199254740991;
    for (var n in nums) {
      if (n <= min1)
        min1 = n;
      else if (n <= min2)
        min2 = n;
      else
        return true;
    }
    return false;
  }
}
