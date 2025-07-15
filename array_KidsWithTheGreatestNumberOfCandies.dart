class Solution {
  List<bool> kidsWithCandies(List<int> candies, int extraCandies) {
      List<bool> lResult = [];
      int iMax = 0;

      for (int item in candies) {
          iMax = (iMax > item) ? iMax : item;
      }

      for (int item in candies) {

          lResult.add(item + extraCandies >= iMax);

      }

      return lResult;

  }
}