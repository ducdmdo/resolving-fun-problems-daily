/**
 * Array: Max Profit ( ** Interview Question)
The function maxProfit aims to find the maximum profit one could achieve by buying and selling a stock once, given an array of stock prices (prices).



Constraints:

The array can be empty or contain any number of elements.

The elements in the array are non-negative integers, representing the stock prices.

You must buy before you can sell the stock.



Parameters:

prices: An array of integers representing stock prices.



Returns:

The function returns the maximum profit achievable by buying and selling a stock once.

If no profit can be made, the function returns 0.

If the array is empty, the function also returns 0.



Examples:

Basic Example

let prices = [7, 1, 5, 3, 6, 4];
let result = maxProfit(prices);
// The function should return 5
// Buy at price 1 and sell at 6 to achieve a maximum profit of 5.
Array with Decreasing Prices

let prices = [5, 4, 3, 2, 1];
let result = maxProfit(prices);
// The function should return 0
// No profit can be made in this case.
Array with Constant Prices

let prices = [2, 2, 2, 2];
let result = maxProfit(prices);
// The function should return 0
// No profit can be made when the stock price doesn't change.
Array with One Price

let prices = [1];
let result = maxProfit(prices);
// The function should return 0
// Cannot sell the stock after buying.
Empty Array

let prices = [];
let result = maxProfit(prices);
// The function should return 0
// No stock prices given, hence no profit.
Array with Random Prices

let prices = [2, 1, 4, 5, 2, 9, 7];
let result = maxProfit(prices);
// The function should return 8
// Buy at price 1 and sell at 9 to achieve a maximum profit of 8.
Array with Increasing Prices

let prices = [1, 2, 3, 4, 5];
let result = maxProfit(prices);
// The function should return 4
// Buy at price 1 and sell at 5 to achieve a maximum profit of 4.


Note: The goal is to maximize the profit by choosing a single day to buy and a different day in the future to sell.
 */
//resolve the sub-problem, hold the sub-problem result, iterate through the loop

const maxProfit = (nums) => {
    let buyPrice = nums[0]; // this is the assumption that we buy at the best price
    let maxResult = 0;

    for (let i = 0; i < nums.length; i ++) {

        //buy lowest
        if (buyPrice > nums[i]) {
            buyPrice = nums[i]
        }
        
        maxResult = Math.max(maxResult, nums[i] - buyPrice);
    }

    //maxP is buy the lowest and selling the heighest
    console.log(maxResult);
    return (maxResult);
}

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([5, 4, 3, 2, 1]);
maxProfit([2, 2, 2, 2]);
maxProfit([1]);
maxProfit([2, 1, 4, 5, 2, 9, 7]);
maxProfit([1, 2, 3, 4, 5]);
