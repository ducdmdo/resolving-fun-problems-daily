// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution_old(P, Q) {
    // Implement your solution here
    if (P.length===0 || Q.length === 0) return 0;
    let tempMap = new Map();
    let k = 0;
    let iResult = 0;


    for (let index = 0; index < P.length; index++) {
        if (!tempMap.has(P[index])) {
            tempMap.set(P[index], []);
        } else {
            tempMap.get(P[index]).push(P[index]);
        }
    }

    for (let j = 0; j < Q.length; j ++) {
        if (!tempMap.has(Q[j])) {
            tempMap.set(Q[j], []);
        } else {
            tempMap.get(Q[j]).push(Q[j])
        }
    }

    let arrayMapValue = tempMap.values();
    while (k < tempMap.size) {
        if (arrayMapValue.next().value.length > 0) {
            iResult++
        }
        k++;
    }
    return iResult;
}

function solution(P, Q) {
    const distinctLetters = new Set();
    
    for (let i = 0; i < P.length; i++) {
        // Add the letters from P and Q to the set.
        // If they are the same, it will only be added once.
        distinctLetters.add(P[i]);
        distinctLetters.add(Q[i]);
    }
    
    // The size of the set represents the minimum number of distinct letters.
    return distinctLetters.size;
}

// Example usage:
console.log(solution_old("abc", "bcd")); // Output: 2
console.log(solution_old("axxz", "yzwy")); // Output: 2
console.log(solution_old("bacad", "abada")); // Output: 1
console.log(solution_old("amz", "amz")); // Output: 3


