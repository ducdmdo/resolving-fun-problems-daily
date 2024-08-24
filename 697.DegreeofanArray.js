/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = (nums) => {
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