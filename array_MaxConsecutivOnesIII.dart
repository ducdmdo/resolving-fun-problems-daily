class Solution {
  int longestOnes(List<int> nums, int k) {
    int left = 0;
    int right = 0;
    int zeroCount = 0;
    int maxLength = 0;

    while (right < nums.length) {
      if (nums[right] == 0) zeroCount++;
      right++;

      //If the number of zeros in the current window exceeds 'k'
      if (zeroCount > k) {
        //If the element at the left pointer is 0, decrement the zero count
        // as it's leaving the window
        if (nums[left] == 0) zeroCount--;

        left++;
      }
    }
    return right - left;
  }
}

// class Solution {
//   int longestOnes(List<int> nums, int k) {

//     int left = 0;
//     int zeroCount = 0; // number of zeros within the current window
//     int maxLength = 0; // store the maximum length of valid subarray
//     int currentWindow = 0;
//     int temp = k;

//     //Iterate with the right pointer to expand the window
//     for (int right = 0; right < nums.length; right++) {
//         if (nums[left] == 1 && nums[right] == 1) {
//             currentWindow++;
//             right++;
//         }
//         if (nums[right] == 0 && k>0) {
//             k--;
//             currentWindow++;
//         }
//         if (nums[right] == 0 && k == 0) {
//             left = right;
//             currentWindow = 0;
//             right++;
//             k = temp;
//         }

//         maxLength = max(maxLength, currentWindow);
//     }

//     return maxLength;

//   }
// }
