import 'dart:math' as Math;

class Solution {
  int maxVowels(String s, int k) {
    int left = 0;
    int right = k;
    int iCount = 0;
    int maxResult = 0;
    //if k is bigger than s.length
    if (k > s.length) {
      return 0;
    }

    while (right < s.length) {
      for (int i = left; i < right; i++) {
        if (isVowel(s[i])) {
          iCount++;
        }
      }
      maxResult = Math.max(iCount, maxResult);
      iCount = 0;
      left++;
      right++;
    }
    return maxResult;
  }

  bool isVowel(String char) {
    bool isResult = false;

    if (['a', 'e', 'i', 'o', 'u'].contains(char)) {
      isResult = true;
    }

    return isResult;
  }
}
