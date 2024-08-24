/***
 The function rotate modifies an array (nums) by rotating its elements to the right by k steps.

It does so in-place without allocating extra space.

Constraints:

The array can be empty or contain any number of elements.

The array contains integers.

The value of k can be positive, negative, or zero.



Parameters:

nums: An array of integers to be rotated.

k: An integer representing the number of steps to rotate the array to the right.



Returns:

The function does not return anything; it modifies the input array (nums) in-place.



Examples:

Basic Example

let arr = [1, 2, 3, 4, 5];
rotate(arr, 1);
// After rotation, arr should be [5, 1, 2, 3, 4]
Rotate by Array Length

let arr = [1, 2, 3];
rotate(arr, 3);
// After rotation, arr should be [1, 2, 3]
Rotate by Zero

let arr = [4, 3, 2, 1];
rotate(arr, 0);
// After rotation, arr should be [4, 3, 2, 1]
Empty Array

let arr = [];
rotate(arr, 1);
// After rotation, arr should be []
Negative k Value

let arr = [5, 6, 7, 8];
rotate(arr, -1);
// After rotation, arr should be [6, 7, 8, 5]
Array with All Same Elements

let arr = [2, 2, 2, 2];
rotate(arr, 2);
// After rotation, arr should be [2, 2, 2, 2]
k Larger Than Array Size

let arr = [1, 2];
rotate(arr, 3);
// After rotation, arr should be [2, 1]


Note: Rotation should be performed in-place, meaning no additional array should be used. The function should implement this without using built-in array methods to perform the rotation.


 */

const rotate = (nums, k) => {
  let length = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (k > 0) {
      nums[i] = nums[length];
      nums[length] = nums[length - i];
      k--;
    }
  }
  console.log(nums);
  return nums;
};

rotate([1, 2, 3, 4, 5], 1);
rotate([1, 2, 3], 3);
rotate([4, 3, 2, 1], 0);
rotate([]);
rotate([5, 6, 7, 8], -1);
rotate([2, 2, 2, 2], 2);
rotate([1, 2], 3);
