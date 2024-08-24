/**
 * @param {number[]} nums
 * @return {number}
 */

const maxSubArray = (nums) => {
  let maxSum = -Infinity;
  let maxEnding = 0;

  for (let i = 0; i < nums.length; i++) {
    maxEnding = maxEnding + nums[i];

    //keep tracking maxSum
    if (maxSum < maxEnding) {
      maxSum = maxEnding;
      console.log("Keep tracking maxSum:" + maxSum);
    }
    if (maxEnding < 0) maxEnding = 0;
  }

  console.log(maxSum);
  return maxSum;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
