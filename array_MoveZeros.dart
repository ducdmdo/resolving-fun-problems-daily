class Solution {
  void moveZeroes(List<int> nums) {
    int left = 0;
    int temp = 0;

    for (int right = 0; right < nums.length; right++) {
      if (nums[right] != 0) {
        print('inside if: $right');
        temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        print('left:$left');
        print('right:$right');
        print('------------');
        left++;
      }
    }
  }
}
