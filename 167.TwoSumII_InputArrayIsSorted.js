/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/**

 Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

*/

/**
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 */

// Assuming the array is sorted increasingly

// Simple solution is just looping through the array then let's do the sum for the pair
let twoSum = function (numbers, target) {
  //loop throught the array - each i with the remaining items
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        console.log([i + 1, j + 1]);
        return [i + 1, j + 1];
      }
    }
  }
  console.log("false");
  return false;
};

/**
twoSum([2, 7, 11, 15], 9);
twoSum([2, 3, 4], 6);
twoSum([-1, 0], -1);
twoSum([-1, 1], -1);
 */

// Improvement time !!!!!
// Problem statement: Thinking on how to improve time complexity ???
// Thinking process:
// 1. How much and what i cost with the nested loop ? => it's O(N^2) as of nested loop as above
// 2. If we don't use nested loop, resolving it with a single loop which is a fair approach; single loop would cost O(N)

const twoSumPointer = (numbers, target) => {
  //single loop => what we could do is doing the sum from the left side and the right side; so single loop
  let i = 0;
  let j = numbers.length - 1;
  //console.log(numbers[j]);
  while (i < j) {
    // return if we hit target for the first pair of the very left item and very last item
    if (numbers[i] + numbers[j] === target) {
      console.log([i + 1, j + 1]);
      return [i + 1, j + 1];
    }

    // if the sum is lesser than the target move the left item by one position to the right
    if (numbers[i] + numbers[j] < target) {
      i = i + 1;
      //console.log("let move the left item by one");
    }

    // if the sum is larger than the target then moving the right item by one position to the left
    if (numbers[i] + numbers[j] > target) {
      j = j - 1;
      //console.log("let move the right item to the left side by one position");
    }
  }
  return false;
};

/**
twoSumPointer([2, 7, 11, 15], 9);
twoSumPointer([2, 3, 4], 6);
twoSumPointer([-1, 0], -1);
twoSumPointer([-1, 1], -1);
 */

// So now, can we improve time complexity to O (log N)
// How can we do it => if we are able to reduce the input side by a half, so achieving time complexity is O(log N)

const quickTwoSumPointer = (numbers, target) => {
  let i = 0;
  let j = numbers.length;
  let middle = Math.floor(j / 2);
  console.log("length:" + j);
  console.log("middle:" + middle);

  //Do the sum for the first half
  if (i < middle) {
    let Actualresult = twoSumPointer(numbers.slice(i, middle), target);
    console.log(Actualresult);
    if (Actualresult !== false) {
      console.log("inside the first half chunk:" + Actualresult);
      return Actualresult;
    }
  }

  // Do the sum for the second half
  if (middle < j) {
    let Actualresult = twoSumPointer(numbers.slice(middle, j), target);
    console.log(Actualresult);
    if (Actualresult !== false) {
      console.log("inside the second half chunk:" + Actualresult);
      return Actualresult;
    }
  }

  //If it is not found, do the sum for the whole array
  result = twoSumPointer(numbers, target);
  console.log("inside the last part which is the whole array");
  return result;
};

quickTwoSumPointer([2, 7, 11, 15], 26);
//quickTwoSumPointer([2, 3, 4], 6);
//quickTwoSumPointer([-1, 0, 0, 4, 6, 4, 6, 7, 4, 3], 7);
