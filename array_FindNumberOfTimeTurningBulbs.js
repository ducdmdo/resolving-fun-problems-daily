/**
 * 
Initially, all the bulbs are turned off. At moment K (for K from 0 to N−1), we turn on the A[K]-th bulb. A bulb shines if it is on and all the previous bulbs are turned on too.
Write a function solution that, given an array A of N different integers from 1 to N, returns the number of moments for which every turned on bulb shines.
Examples:
Given A=[2, 1, 3, 5, 4], the function should return 3. The picture describes the first example test.
 */
/**
 * Examples:
Given A=[2, 1, 3, 5, 4], the function should return 3. The picture describes the first example test.
 */
/**
 * At the 0th moment only the 2nd bulb is turned on, but it does not shine because the previous one is not on.
At the 1st moment two bulbs are turned on (1st and 2nd) and both of them shine.
At the 2nd moment three bulbs are turned on (1st, 2nd and 3rd) and all of them shine.
At the 3rd moment four bulbs are turned on (1st, 2nd, 3rd and 5th), but the 5th bulb does not shine because the previous one is not turned on.
At the 4th moment five bulbs are turned on (1st, 2nd, 3rd, 4th and 5th) and all five of them shine. There are three moments (1st, 2nd and 4th) when every turned on bulb shines.
 */

const Solution = (array) => {
    let iResult = 0;
    let iMax =0;

    for (let index = 0; index <  array.length; index ++){
        iMax = Math.max(iMax, array[index]);
        if (iMax === index+1) {
            iResult++;
        }
    }
    console.log(iResult);
    return iResult;
}

Solution([2, 1, 3, 5, 4]);
