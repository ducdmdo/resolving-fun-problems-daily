/**
 * Array: Find Max Min ( ** Interview Question)
The findMaxMin function takes an array of numbers (myArray) as its input.

The function aims to find both the maximum and minimum values present in the array.

It returns an array containing two elements: the first being the maximum value and the second being the minimum value found in myArray.


Constraints:

The array must contain at least one element.

The array can contain integers or floating-point numbers.

Do not use built-in Math.max or Math.min functions.

You are not allowed to sort the array.


Parameters:

myArray: An array of numbers, either integers or floats.


Returns:

The function returns an array [maximum, minimum], where maximum is the largest number and minimum is the smallest number in myArray.



Examples:

Basic Example

let myArray = [3, 2, 4, 1];
let result = findMaxMin(myArray);
// The function should return [4, 1]
Array with Negative Numbers

let myArray = [-1, -2, -3, -4];
let result = findMaxMin(myArray);
// The function should return [-1, -4]
Array with Same Numbers

let myArray = [5, 5, 5, 5];
let result = findMaxMin(myArray);
// The function should return [5, 5]
Array with One Element

let myArray = [7];
let result = findMaxMin(myArray);
// The function should return [7, 7]
Array with Floating-Point Numbers

let myArray = [1.1, 2.2, 0.9, 3.7];
let result = findMaxMin(myArray);
// The function should return [3.7, 0.9]
Array with Mixed Positive and Negative Numbers

let myArray = [-1, 2, -3, 4];
let result = findMaxMin(myArray);
// The function should return [4, -3]


Note: The function assumes that the array is not empty. If you expect to encounter empty arrays, you should handle that separately before calling findMaxMin.

 */

const findMaxMin = (nums) => {
   
    let max = nums[0];
    let min = nums[0];

    if (nums.length === 0 ) return null;

    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] > max) {
            max = nums[i];
        }
        if (nums[i] < min){
            min = nums[i];
            
        }
    }
    console.log(max + ":" + min);
    return [max,min];
}

findMaxMin([3, 2, 4, 1]);
findMaxMin([-1, -2, -3, -4]);
findMaxMin([5, 5, 5, 5])
findMaxMin([7,7]);
findMaxMin([1.1, 2.2, 0.9, 3.7]);
findMaxMin([-1, 2, -3, 4]);