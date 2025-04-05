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

//Approach 1: Recursion with Memoization
var climbStairs1 = function (n) {
    const cache = new Map();

    return dp(n);

    function dp(s) {
        if (s <= 1) return 1;

        if (cache.has(s)) return cache.get(s);

        const computation = dp(s - 1) + dp(s - 2);

        cache.set(s, computation);

        return computation;
    }
};

//Approach 2: Iteration with Tabulation
var climbStairs2 = function (n) {
    if (n <= 1) return 1;

    const dp = new Array(n);

    dp[0] = 1;
    dp[1] = 2;

    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n - 1];
};

//Approach 3: Iteration with Space Optimization
var climbStairs3 = function (n) {
    if (n <= 2) return n;

    let secondLast = 1, last = 2, current;

    for (let i = 0; i < n - 2; i++) {
        current = secondLast + last;
        secondLast = last;
        last = current;
    }

    return current;
};
