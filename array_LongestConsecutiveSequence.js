/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
 input: unsorted array of integers nums
 output: length of the longest consecutive elements sequence.
  */
  /**
  Input: nums = [100,4,200,1,3,2]
  Output: 4
  Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4

  Input: nums = [0,3,7,2,5,8,4,6,0,1]
  Output: 9

  Input: nums = [0,2,1,3,9,10,11,12,13,14,15,16,17]
   */

   /**
   1. Do the sorting => so nlog N
   2. Iterate throught the sorted loop
    */
   const merge = (array1, array2) => {
    let sortedResult = [];
    let i = 0;
    let j = 0;
    
     while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            sortedResult.push(array1[i]);
            i++;
        } else {
            sortedResult.push(array2[j]);
            j++;
        }
        
     }
     //in case array1.length is larger than array2.length
     while (i < array1.length) {
        sortedResult.push(array1[i]);
        i++;
     }
    //in case array2.length is larger than array1.length
    while (j < array2.length) {
        sortedResult.push(array2[j]);
        j++;
    }

     console.log("sortedResult:"+ sortedResult);
     return sortedResult;

}

//time complexity: nlog(N)
//space complexity: O(n)
const mergeSort = (array) =>{

    //base case
    if (array.length === 1) return array;

    let iMidIndex = Math.floor(array.length / 2);

    //recursive case

    let leftArray = mergeSort(array.slice(0, iMidIndex));
    let rightArray = mergeSort(array.slice(iMidIndex));
    
    console.log("merge:" + leftArray + ":" + rightArray);
    return merge(leftArray, rightArray);

}

var longestConsecutive = function(nums) {

    //.0 Edge case
    if (nums.length === 0 || nums.length === 1) return nums.length;

    //1. sort the array
    //[100,4,200,1,3,2] => [1,2,3,4,100,200]
    let sortedArray = mergeSort(nums);
    console.log(sortedArray);
    //2. Iterate throught the loop
    let iCount = 1;
    let iMax = iCount;
    for (let index = 0; index < sortedArray.length-1; index++) {
        if ((sortedArray[index] + 1) === sortedArray[index+1]) {
            iCount ++;

        } else if ((sortedArray[index] + 1) !== sortedArray[index+1]) {
            iCount = 1;
        }
        iMax = Math.max(iCount, iMax);

    }
    console.log(iMax);
    return iMax;
};

longestConsecutive([100,4,200,1,3,2]);
longestConsecutive([0,3,7,2,5,8,4,6,0,1]);
longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]); //=> [-1,-1,0,1,3,4,5,6,7,8,9]