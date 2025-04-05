/**
    @title 746. Min Cost Climbing Stairs
    @difficulty Easy
    @url https://leetcode.com/problems/min-cost-climbing-stairs

    @description
        You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
        You can either start from the step with index 0, or the step with index 1.
        Return the minimum cost to reach the top of the floor.

    @param {number[]} cost
    @return {number}
 */

//Approach 1: Recursion with Memoization
var minCostClimbingStairs1 = function (cost) {
    const cache = new Map();

    return Math.min(dp(cost.length - 1), dp(cost.length - 2));

    function dp(i) {
        if (i < 0) return 0;
        if (i <= 1) return cost[i];

        if (cache.has(i)) return cache.get(i);

        const computation = cost[i] + Math.min(dp(i - 1), dp(i - 2));

        cache.set(i, computation);

        return computation;
    }
};

//Approach 2: Iteration with Tabulation
var minCostClimbingStairs2 = function (cost) {
    const dp = new Array(cost.length);

    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < cost.length; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(dp.at(-2), dp.at(-1));
};

//Approach 3: Iteration with Space Optimization
var minCostClimbingStairs = function (cost) {
    let secondLast = cost[0],
        last = cost[1],
        current;

    for (let i = 2; i < cost.length; i++) {
        current = cost[i] + Math.min(secondLast, last);
        secondLast = last;
        last = current;
    }

    return Math.min(secondLast, last);
};
