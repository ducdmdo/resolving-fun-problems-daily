/**
 * There are many cars parked in a parking lot. The parking lot is a straight line with a parking spot for
every meter. 
There are n cars currently parked and a roofer wants to cover them with a roof. 
The requirement is that at least k cars are covered by the roof. Determine the minimum length of the roof that will cover k cars.
 */

/**
 * n=4
 * cars = [6, 2, 12, 7] 
 * k=3
 */
// 1. Sorting first then 
// 2. Then using 2 pointer with K element

const solution = (cars, k) => {
    // 1. sorting
    cars.sort((a,b) => a-b);
    console.log(cars)

    const n = cars.length;

    if (k > n) return -1; // Not possible to cover more cars than exist

    //2. Then using sliding window
    let minLength = Infinity;

    for (let index = 0; index <= n - k; index ++) {
        let currentLength = cars[index + k - 1] - cars[index] + 1;
        minLength = Math.min(minLength, currentLength);
    }
    
    return minLength;

}


console.log(solution([6, 2, 12, 7],3)); // => 6
console.log(solution([2,10, 8, 17],3));//2 10 8 17 => 9
console.log(solution([1,2,3,10],4));//1 2 3 10 => 10
