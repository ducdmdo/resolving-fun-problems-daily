class Solution {
  int compress(List<String> chars) {
    int left = 0;
    int right = 0;

    if (chars.isEmpty) {
      return 0;
    }

    while (right < chars.length) {
      String currentChar = chars[right];
      int count = 0;
      int groupEnd = right;
      while ((groupEnd < chars.length) && (chars[groupEnd] == currentChar)) {
        count++;
        groupEnd++;
      }
      chars[left++] = currentChar;

      if (count > 1) {
        final String countStr = count.toString();
        for (int k = 0; k < countStr.length; k++) {
          chars[left++] = countStr[k];
        }
      }
      right = groupEnd;
    }
    return left;
  }
}
