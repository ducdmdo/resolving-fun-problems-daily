/**
 * 
 * Array: Remove Duplicates ( ** Interview Question)
The removeDuplicates function aims to remove duplicates from a sorted array of integers (nums) and returns the new length of the array.

The function modifies the input array in-place such that each element appears only once and returns the new length.



Constraints:

The input array is sorted in ascending order.

The array can be empty or contain any number of elements.

Elements in the array are integers.

The function should not allocate extra space; it must do this by modifying the input array in-place (this means you cannot use another data structure like a set).



Parameters:

nums: A sorted array of integers.



Returns:

The function returns the new length of the array after removing duplicates.

If nums is empty, the function returns 0.



Examples:

Basic Example

let nums = [1, 1, 2];
let result = removeDuplicates(nums);
// The function should return 2
// The nums array should be modified to [1, 2]
Array with All Duplicates

let nums = [1, 1, 1, 1];
let result = removeDuplicates(nums);
// The function should return 1
// The nums array should be modified to [1]
Array with No Duplicates

let nums = [1, 2, 3, 4];
let result = removeDuplicates(nums);
// The function should return 4
// The nums array should remain [1, 2, 3, 4]
Array with Multiple Sets of Duplicates

let nums = [1, 1, 2, 2, 3];
let result = removeDuplicates(nums);
// The function should return 3
// The nums array should be modified to [1, 2, 3]
Empty Array

let nums = [];
let result = removeDuplicates(nums);
// The function should return 0
// The nums array should remain empty
 */

const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;

  let uniqueValue = nums[0];
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    if (uniqueValue !== nums[i]) {
      uniqueValue = nums[i];
      result++;
    }
  }
  console.log(result);
  return result;
};

removeDuplicates([1, 1, 2]);
removeDuplicates([1, 1, 1, 1]);
removeDuplicates([1, 2, 3, 4]);
removeDuplicates([1, 1, 2, 2, 3]);
removeDuplicates([]);
