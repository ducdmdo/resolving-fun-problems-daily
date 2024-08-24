<<<<<<< HEAD
/***
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:


Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
*/

=======
>>>>>>> 8e8113ae8a15968340b7284ba9e4488a088065bb
/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = (nums) => {
<<<<<<< HEAD
  let maxRepeatedTime = 0;
  let currentRepeatedTime = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      currentRepeatedTime = nums[i] + nums[i + 1];
    }

    if (maxRepeatedTime < currentRepeatedTime) {
      maxRepeatedTime = currentRepeatedTime;
    }
  }
  return maxRepeatedTime;
};
=======
    let maxLength = 0;
    let currentLenght = 0;
    let collection = {};

    for (let i = 0; i < nums.length; i ++) {
     console.log(nums[i]);

     collection[nums[i]] = (collection[nums[i]] || 0 ) + 1;
     console.log("collection[nums[i]]:" + collection[nums[i]]);
     
     //console.log("collection[nums[1]] || 0  + 1:" + (collection[nums[1]] || 0 ) + 1);
      maxLength = Math.max(maxLength, collection[nums[i]]);
      //console.log(maxLength);
    }


    //console.log(maxLength);
    return maxLength;

};

//findShortestSubArray([1,2,2,3,1]);
findShortestSubArray([1,2,2,3,1,4,2]);
>>>>>>> 8e8113ae8a15968340b7284ba9e4488a088065bb
