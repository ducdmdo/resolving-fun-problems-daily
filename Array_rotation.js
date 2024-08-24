
/**
 * 
 * @param {
 * } nums 
 * @param {*} k 
 * Examples:

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
 */


const rotate = (nums, k) => {

    let currentLength = nums.length-1;
    let temp;

    if (currentLength === 0) return [];

    if (k === 0) return nums;
    
    //iterate throught the loop
   for (let i = 0; i < currentLength; i ++) {
    if (k > 0) {
        temp = nums.pop();
        nums.unshift(temp)
        //console.log(temp)
        k--;
    }
   }

    //return a modified array
    console.log(nums)
    return nums
}

rotate([1, 2, 3, 4, 5],1);
rotate([1, 2, 3],3); 
rotate([4, 3, 2, 1],0);
rotate([],1);
rotate([5,6,7,8],-1);
rotate([2,2,2,2],2);
rotate([1,2],3);