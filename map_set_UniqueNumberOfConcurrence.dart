import 'dart:collection';

class Solution {
  bool uniqueOccurrences(List<int> arr) {
    final Map<int, int> map = HashMap();
    Set<int> isSeen = {};

    for (var item in arr) {
      if (map.containsKey(item)) {
        map[item] = map[item]! + 1;
      } else {
        map[item] = 1;
      }
    }

    isSeen.addAll(map.values);

    if (isSeen.length != map.length) {
      return false;
    }

    return true;
  }
}
