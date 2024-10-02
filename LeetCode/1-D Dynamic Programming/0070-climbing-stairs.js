/**
    @title 70. Climbing Stairs
    @difficulty Easy
    @url https://leetcode.com/problems/climbing-stairs/

    @description
        You are climbing a stair case. It takes n steps to reach to the top.

        Each time you can either climb 1 or 2 steps.

        In how many distinct ways can you climb to the top?

        Note: Given n will be a positive integer.

    @param {number} n
    @return {number}
 */

// Bottom up iterative approach 
var climbStairsIterative = function (n) {
    let dp = new Array(n);

    dp[0] = 1;
    dp[1] = 2;

    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n - 1];
};

// Top down recursive approach
var climbStairsRecursive = function (n, memo = new Map()) {
    if (n <= 1) return 1;
    if (n === 2) return 2;

    if (memo.has(n)) return memo.get(n);

    let result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);

    memo.set(n, result);

    return result;
};
