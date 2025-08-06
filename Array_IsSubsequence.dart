class Solution {
  bool isSubsequence(String s, String t) {
    int sPointer = 0; // Pointer for string 's'
    int tPointer = 0; // Pointer for string 't'

    // Iterate while both pointers are within their respective string bounds.
    while (sPointer < s.length && tPointer < t.length) {
      // If the characters at the current pointers match,
      // move the 's' pointer forward, indicating a character from 's' has been found.
      if (s[sPointer] == t[tPointer]) {
        sPointer++;
      }
      // Always move the 't' pointer forward to continue searching in 't'.
      tPointer++;
    }
    return sPointer == s.length;
  }
}
