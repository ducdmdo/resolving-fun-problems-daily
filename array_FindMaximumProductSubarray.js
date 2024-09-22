/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let iMinProduct = nums[0];
  let iMaxProduct = nums[0];
  let result = iMaxProduct;

  if (nums.length === 0) return 0;

  for (let i = 1; i < nums.length; i++) {
    let temp = Math.max(
      nums[i],
      Math.max(iMinProduct * nums[i], iMaxProduct * nums[i])
    );
    iMinProduct = Math.min(
      nums[i],
      Math.min(iMinProduct * nums[i], iMaxProduct * nums[i])
    );
    iMaxProduct = temp;

    result = Math.max(result, iMaxProduct);
  }

  return result;
};
