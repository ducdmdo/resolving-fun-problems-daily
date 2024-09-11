function solution(A) {
    const N = A.length;
    const dp = new Array(N).fill(-Infinity);
    dp[0] = A[0];

    for (let i = 1; i < N; i++) {
        for (let dice = 1; dice <= 6; dice++) {
            if (i - dice >= 0) {
                dp[i] = Math.max(dp[i], dp[i - dice] + A[i]);
            }
        }
    }

    return dp[N - 1];
}

// Test the function
const A = [1, -2, 0, 9, -1, -2];
console.log(solution(A)); // Output: 8