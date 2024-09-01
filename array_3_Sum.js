
var threeSum_brute_force = function(nums) {
    //trying with 3 pointers
    

    let tempMap = new Map();
    let tempValue = [];

    //iterate throught the loop
    for (let index = 0; index < nums.length-1; index ++){
        let iDuplicatedKey=0;
        let fPointer = nums[index];
        let sPointer = nums[index+1];
        for (let jIndex = 2; jIndex < nums.length - 1; jIndex++) {
            let tPointer = nums[jIndex];
        //if sum of 3 pointers === 0
            let key = fPointer + sPointer + tPointer;
            if (tempMap.has([fPointer, sPointer, tPointer])) {
                iDuplicatedKey++;
                tempValue = tempMap.get([fPointer, sPointer, tPointer]);
                tempValue.push(iDuplicatedKey);
                console.log(tempMap.get([fPointer, sPointer, tPointer]));
            }
            else if (key ===0 && !tempMap.has([fPointer, sPointer, tPointer])) {
                    if (!tempMap.has([fPointer, sPointer, tPointer])) {
                        tempMap.set([fPointer, sPointer, tPointer], []);
                    }
                }
            }

        }
        
    };

    //Put the key & value into map

/**
 * ThreeSum => Sum of (x and TwoSum)
 * @param {} nums 
 */

/** twoSum
 * Input = [-1,0,1,2,-1,-4] => Output:
 * i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0
 * 
 */


var threeSum_Map = function(nums) {
    let tempMap = new Map();
    let arrayResult = [];
    
    //Calculate twoSum of i & j, start with i = 0 & j = i+1
    for (let index = 0; index < nums.length -1; index ++) {
        //Put into a map with a pair of key & value: key = [i , j] & value =  nums[i] + nums[j]
        let tempPairSum = nums[index] + nums[index+1];
        tempMap.set([nums[index], nums[index+1]], tempPairSum);
    }
    //tempMap
    //Iterate throught the loop from k. k = k + i + j;
    for (let k = 2; k < nums.length - 1; k++) {
        //If nums[i] + nums[j] + nums [k] === 0
        //Then tempMap.get(key).push(nums[k])
        let temp = tempMap.get([nums[k-2], nums[k-1]]).toString();
        let tempThreeSum = nums[k] + temp;
        if (tempThreeSum === 0) {
            arrayResult.push([nums[k-2], nums[k-1], nums[k]]);
            console.log ("arrayResult:" + arrayResult);
        }
    }
    return arrayResult;
    
};

const numberSortFn = (a, b) => {
    if (a < b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }
  };

const twoSum = (nums, index, result) => {
    let left = index+1;
    let right = nums.length - 1;
    while (left < right) {
        let sum = nums[index] + nums[left] + nums[right];

        //because the array is sorted ascending
        //then if sum is lesser than result then move left pointer to the right
        //then if sum is larger than result then move right pointer to the left
        //[-4,-1,-1,0,1,2]
        
        if (sum === 0){
            result.push([nums[index], nums[left], nums[right]]);
            left++;
        }
        if (sum < 0) {
            left++;
        } else if (sum > 0) {
            right--;
        } 
        
    }
}

const threeSum = (nums) => {

    let arrayResult = [];

    //sort the input array, to ignore duplicated item
    let tempNums = nums;
    nums = tempNums.sort(numberSortFn);
    //nums.sort(); // => [-4,-1,-1,0,1,2]

    //iterate throught loop but with value[index] < 0 as of after sorting
    for (let index = 0; index < nums.length-1 && nums[index] < 0; index++) {

        //Only do twoSum with index is at zero position OR not duplicated item
        if (index === 0 || nums[index] !== nums[index - 1]) {
            twoSum(nums, index, arrayResult);
            console.log("twoSum:" + index);
        }
        
    }
    console.log(arrayResult);
    return arrayResult;

}

threeSum([-1,0,1,2,-1,-4]);