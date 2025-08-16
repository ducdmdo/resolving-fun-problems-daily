class Solution {
  List<List<int>> findDifference(List<int> nums1, List<int> nums2) {
    Set<int> setNum1 = {};
    Set<int> setNum2 = {};
    List<List<int>> result = [[], []];

    setNum1.addAll(nums1);
    setNum2.addAll(nums2);

    for (var num in setNum1) {
      if (!setNum2.contains(num)) {
        result[0].add(num);
      }
    }

    for (var num in setNum2) {
      if (!setNum1.contains(num)) {
        result[1].add(num);
      }
    }

    return result;
  }
}
