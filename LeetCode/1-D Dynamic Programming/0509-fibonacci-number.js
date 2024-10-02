/**
    @title 509. Fibonacci Number
    @difficulty Easy
    @url https://leetcode.com/problems/fibonacci-number/

    @description
        The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones,
        starting from 0 and 1. That is,
        F(0) = 0, F(1) = 1
        F(n) = F(n - 1) + F(n - 2), for n > 1.
        Given n, calculate F(n).

    @param {number} n
    @return {number}
 */

//Bottom up iterative approach
var fib = function (n) {
    if (n <= 1) return n;

    let dp = new Array(n + 1);

    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp.at(-1);
};

//Top down recursive approach
var fib = function (n, memo = new Map()) {
    if (n <= 1) return n;

    if (memo.has(n)) return memo.get(n);

    const res = fib(n - 1, memo) + fib(n - 2, memo);
    memo.set(n, res);

    return res;
};
