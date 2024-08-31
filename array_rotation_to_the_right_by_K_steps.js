/**
 * @param {number[]} nums - is the array
 * @param {number} k - is the step
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 /** test cases
 1. Input: nums = [1,2,3,4,5,6,7], k = 3 => Output: [5,6,7,1,2,3,4]
 2. Input: nums = [-1,-100,3,99], k = 2 => Output: [3,99,-1,-100]
 3. Input: nums = [1], k = 0 => Output: [1]
 6. Input: nums = [], k = 0 => Output: []
 7. Input: nums = [], k = 9 => Output: []

 4. Input: nums = [1], k = 1 => Output: [1]
 5. Input: nums = [1], k = 10 => Output: [1]

  */
 var rotate = function(nums, k) {

    //Input: nums = [1,2,3,4,5,6,7], k = 3 => Output: [5,6,7,1,2,3,4]
    //Input: [nums[0],nums[1],nums[2],nums[3],nums[4],nums[5],nums[6]]
    //Output: [nums[4],nums[5],nums[6],nums[0],nums[1],nums[2],nums[3]]
    //length = 7
    //k = 3

    //if k=0
    if (k===0 && (k > nums.length && nums.length === 0)) return nums;
    else if (nums.length === 0) return nums;

    //nums > 0 and k > 0 & k < nums.length
    for (let index = 0; index < k; index++) {
        let temp = nums.pop();
        nums.unshift(temp);
    }
};

/**
 * @param {number[]} nums - is the array
 * @param {number} k - is the step
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 /** test cases
 1. Input: nums = [1,2,3,4,5,6,7], k = 3 => Output: [5,6,7,1,2,3,4]
 2. Input: nums = [-1,-100,3,99], k = 2 => Output: [3,99,-1,-100]
 3. Input: nums = [1], k = 0 => Output: [1]
 6. Input: nums = [], k = 0 => Output: []
 7. Input: nums = [], k = 9 => Output: []

 4. Input: nums = [1], k = 1 => Output: [1]
 5. Input: nums = [1], k = 10 => Output: [1]

  */
 var rotate_2nd_solution = function(nums, k) {
    //if k=0
    if (k===0 && (k > nums.length && nums.length === 0)) return nums;
    else if (nums.length === 0) return nums;
    let arrayLength = nums.length;
    let queue = [];
    let results = [];

    //nums > 0 and k > 0 & k < nums.length
    for (let index = 0; index < k; index++) {
        let temp = nums.pop();
        results.unshift(temp); 
    }
    for (let j = 0; j < nums.length; j++){
        results.push(nums[j]);
    }
    return results;
};



var rotate_3rd_solution = function(nums, k) {

    //Input: nums = [1,2,3,4,5,6,7], k = 3 => Output: [5,6,7,1,2,3,4]
    //Input: [nums[0],nums[1],nums[2],nums[3],nums[4],nums[5],nums[6]]
    //Output: [nums[4],nums[5],nums[6],nums[0],nums[1],nums[2],nums[3]]
    //length = 7
    //k = 3

    //if k=0
    if (k===0 && (k > nums.length && nums.length === 0)) return nums;
    else if (nums.length === 0) return nums;
    let arrayLength = nums.length;

    let tempArray = nums;
    nums = [];

    //nums > 0 and k > 0 & k < nums.length
    for (let index = 0; index < k; index++) {
        let temp = tempArray.pop();
        nums.unshift(temp); 
    }
    for (let j = 0; j < tempArray.length; j++){
        nums.push(tempArray[j]);
    }
    console.log(nums);
    return nums;
};


const reverse = (nums, start, end) => {
    while(start < end) {
        //[nums[start], nums[end]] = [nums[end], nums[start]];
        let temp = nums[end];
        nums[end] = nums[start];
        nums[start] = temp;
        start++;
        end--;

    }
}

var rotate_4th_solution = function(nums, k) {

    let remainder = k % nums.length;

    //reverse the whole arraay
    reverse(nums, 0, nums.length-1);

    //reverse the first part of the array
    reverse(nums, 0, remainder-1)

    //reverse the second part of the array
    reverse(nums, remainder, nums.length-1);
    
    console.log(nums);
    
};

rotate_4th_solution([1,2,3,4,5,6,7],4);