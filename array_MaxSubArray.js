/**
 * 
 Array: Max Sub Array ( ** Interview Question)
The function maxSubarray takes an array of integers (nums) and returns the sum of the contiguous subarray (containing at least one number) which has the largest sum.

Constraints:

The input array may be empty or contain any number of elements.

The elements in the array are integers.

Parameters:

nums: An array of integers.

Returns:

An integer representing the sum of the contiguous subarray with the largest sum.

Examples:

Basic Example

const result = maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// The function should return 6 because [4, -1, 2, 1] has the largest sum
Single-Element Array

const result = maxSubarray([1]);
// The function should return 1 because the single element is the largest sum

All Negative Numbers

const result = maxSubarray([-1, -2, -3]);
// The function should return -1 because it is the largest sum in the array
Empty Array

const result = maxSubarray([]);
// The function should return 0 because the array is empty
Array with Zero

const result = maxSubarray([0, -1, -2]);
// The function should return 0 because it is the largest sum in the array


Note: The function should handle edge cases like single-element arrays and empty arrays. It should also be capable of dealing with arrays containing both positive and negative integers.
 */

const maxSubarray = (nums) => {
    let currentSum = nums[0];
    let maxR = nums[0];

    if (nums.length === 0) return 0;
    
    for (let i = 1; i < nums.length; i ++) {
        currentSum = currentSum + nums[i];

        if (currentSum < nums[i] ) {
            currentSum = nums[i]; // if sum of all previous items are lesser than the current item then move to the current item
        }
        
        maxR = Math.max(maxR, currentSum);
        
    }
    console.log(maxR);
    return maxR;
}

maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
maxSubarray([1]);
maxSubarray([-1, -2, -3]);
maxSubarray([]);
maxSubarray([0, -1, -2]);

//maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])