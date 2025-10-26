import 'dart:collection';

class Solution {
  List<String> letterCombinations(String digits) {
    final List<String> result = [];

    if (digits.isEmpty) return result;

    final Map<String, List<String>> digitToLetters = UnmodifiableMapView({
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z'],
    });

    //start backtracking process
    _backTrack(digits, 0, [], result, digitToLetters);

    return result;
  }

  /// A recursive helper function to generate combinations using backtracking.
  ///
  /// [digits]: The input string of digits.
  /// [index]: The current digit index being processed.
  /// [currentCombination]: The string buffer holding the current combination built so far.
  /// [result]: The list to store all generated combinations.
  /// [digitToLetters]: The mapping from digits to their corresponding letters.

  void _backTrack(
    String digits,
    int index,
    List<String> currentCombination,
    List<String> result,
    Map<String, List<String>> digitToLetters,
  ) {
    //base case
    if (index == digits.length) {
      result.add(currentCombination.join());
      return;
    }

    //Get the current digit character;
    final String digitChar = digits[index];

    final List<String> letters = digitToLetters[digitChar]!;

    for (final String letter in letters) {
      //1. choose: append the current letter to the combination
      currentCombination.add(letter);

      //2. Explore: recursively call backtrack for the next digit
      _backTrack(digits, index + 1, currentCombination, result, digitToLetters);

      //3. Unchoose (Backtrack): remove the last appended letter to explore
      // other possibilities for the current digit

      currentCombination.removeLast();
    }
  }
}

void main() {
  final solution = Solution();
  final digits = "23";
  final combinations = solution.letterCombinations(digits);
  print(combinations); // Output: [ad, ae, af, bd, be, bf, cd, ce, cf]
}
