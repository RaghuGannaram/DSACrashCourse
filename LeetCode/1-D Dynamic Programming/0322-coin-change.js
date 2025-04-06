/**
    @title 322. Coin Change
    @difficulty Medium
    @url https://leetcode.com/problems/coin-change/

    @description
        You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount.
        If that amount of money cannot be made up by any combination of the coins, return -1.

    @param {number[]} coins
    @param {number} amount
    @return {number}
 */

//Approach 1: Recursion with Memoization
var coinChange1 = function (coins, amount) {
    const cache = new Map();

    const coinsRequired = dp(amount);

    return coinsRequired === Number.MAX_SAFE_INTEGER ? -1 : coinsRequired;

    function dp(due) {
        if (due < 0) return Number.MAX_SAFE_INTEGER;
        if (due === 0) return 0;

        if (cache.has(due)) return cache.get(due);

        const computation = Math.min(
            ...coins.map((coin) => {
                const sub = dp(due - coin);
                return sub === Number.MAX_SAFE_INTEGER ? sub : sub + 1;
            })
        );

        cache.set(due, computation);

        return computation;
    }
};

var coinChange2 = function (coins, amount) {
    const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);

    dp[0] = 0;

    for (let a = 1; a <= amount; a++) {
        for (let coin of coins) {
            if (a - coin >= 0) {
                dp[a] = Math.min(dp[a], dp[a - coin] + 1);
            }
        }
    }

    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
