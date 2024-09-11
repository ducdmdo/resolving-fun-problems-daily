/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange_old = function(coins, amount) {
    let sumCoins = 0;
    let currentResult = amount / coins[0] || 0;
    let biggerValue = currentResult;
    let fewestNumberOfCoin = 0;

    //let do sum
    for (let i = 0; i < coins.length; i ++) {
        sumCoins = sumCoins + coins[i];
    }
    //handle edge cases
    if (amount > sumCoins) {
        return -1;
    } else if (amount === 0 && (sumCoins > 0 || sumCoins ===0)) {
        return 0;
    } else {
        for (let index = 1; index < coins.length - 1; index++) {
            currentResult = amount % coins[index];
            console.log(`currentResult: ${currentResult}`);
            console.log(`biggerValue: ${biggerValue}`);
            if (biggerValue <  currentResult){
                biggerValue = currentResult;
            }
        }
        fewestNumberOfCoin = Math.floor(amount / biggerValue);
        fewestNumberOfCoin = fewestNumberOfCoin + (amount % biggerValue);
    }
    return fewestNumberOfCoin;
};

//dynamic programing tabulation
const coinChange = (coins, amount) => {
    //creating a table keeping sequence series of value breaking down from amount
    const table = new Array(amount+1).fill(Infinity);
    table[0] = 0;

    for (let coin of coins) { // [1,2,5]
        for (let i = 0; i < table.length; i++) { // [0,1,2,3,4,5,6,7,8,9,10,11]
            if (coin <= i) {
                let index = i - coin;
                let potentialAmt = table[index] + 1;

                table[i] = Math.min(potentialAmt, table[i]);

            }
            
        }
    }
    console.log(table[table.length - 1]);
    return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];

}

function coinChange(coins, amount) {
    // Initialize a dp array with amount + 1 elements, filled with a large number (amount + 1)
    let table = new Array(amount + 1).fill(amount + 1);
    
    // Base case: 0 amount requires 0 coins
    table[0] = 0;
    
    // Loop through each coin in the coins array
    for (let coin of coins) {
        // Update the dp array for each possible amount from coin to amount
        for (let i = coin; i <= amount; i++) {
            table[i] = Math.min(dp[i], table[i - coin] + 1);
        }
    }
    
    // If dp[amount] is still the initial value, return -1 (not possible to make up the amount)
    return dp[amount] > amount ? -1 : dp[amount];
}

coinChange([1,2,5],11);
//coinChange([2],3);
//coinChange([1],0);