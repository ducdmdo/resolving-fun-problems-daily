/**
 You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

 */

// Original idea is to use 2 pointer: left-pointer and right pointer
// If right-pointer-left-pointer < 0 => move left-pointer and right-pointer by one position
// If right-pointer-left-pointer > 0 => keep maxValue
//.  => then move left-pointer and right-pointer by one position

/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  let i = 0;
  let j = prices.length - 1;
  let maxResult = 0;

  while (i < j) {
    currentResult = prices[j] - prices[i];
    console.log("current result:" + currentResult);

    if (currentResult <= maxResult) {
      i = i + 1;
    }

    if (currentResult > maxResult) {
      maxResult = currentResult;
      j = j - 1;
    }
  }
  console.log(maxResult);
  return maxResult;
};

/***
maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([1, 4, 2]);
maxProfit([7, 6, 4, 3, 1]);
maxProfit([3, 3]);
maxProfit([2, 1, 4]);
 * 
*/

/**
 * Solution above does not work perfectly as there are a few test cases will fail: such [2,1,4]
 **/
// Now, try with nested loop or bruce force to resolve it first
// It's basically not a good solution just yet.

const bruceForceMaxProfit = (prices) => {
  let maxProfit = 0;
  let currentProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      currentProfit = prices[j] - prices[i];

      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
    }
  }
  console.log(maxProfit);
  return maxProfit;
};

/**
bruceForceMaxProfit([7, 1, 5, 3, 6, 4]);
bruceForceMaxProfit([1, 4, 2]);
bruceForceMaxProfit([7, 6, 4, 3, 1]);
bruceForceMaxProfit([3, 3]);
bruceForceMaxProfit([2, 1, 4]);
 */

/**
 * Above solution works but time complexity is O (N^2) which is not a good solution just yet
 * Thinking of reducing to O(N) by reducing nested loop into single loop
 * So basically, keep tracking the buying price minimum and move the right-pointer to the right
 * then calculating and keep tracking Profit maximum

 */

const quickMaxProfit = (prices) => {
  let left = 0;
  let maxResult = 0;
  let buyPrice = prices[left];

  while (left < prices.length - 1) {
    if (buyPrice > prices[left]) {
      buyPrice = prices[left];
    }
    left = left + 1;

    maxResult = Math.max(maxResult, prices[left] - buyPrice);
  }
  console.log(maxResult);
  return maxResult;
};

quickMaxProfit([7, 1, 5, 3, 6, 4]);
quickMaxProfit([1, 4, 2]);
quickMaxProfit([7, 6, 4, 3, 1]);
quickMaxProfit([3, 3]);
quickMaxProfit([2, 1, 4]);
