/**
    @title 494. Target Sum
    @difficulty Medium
    @url https://leetcode.com/problems/target-sum/

    @description
        You are given a list of non-negative integers, a1, a2, ..., an, and a target, S.
        Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
        Find out how many ways to assign symbols to make sum of integers equal to target S.

    @param {number[]} nums
    @param {number} S
    @return {number}
 */

// Approach 1: Recursion with DFS
var findTargetSumWays1 = function (nums, target) {
    return dfs(0, 0);

    function dfs(i, sum) {
        if (i === nums.length) return sum === target ? 1 : 0;

        return dfs(i + 1, sum + nums[i]) + dfs(i + 1, sum - nums[i]);
    }
};

// Approach 2: Recursion with Memoization
var findTargetSumWays2 = function (nums, target) {
    const cache = new Map();

    return dp(0, 0);

    function dp(i, sum) {
        if (i === nums.length) return sum === target ? 1 : 0;

        const key = `${i}-${sum}`;

        if (cache.has(key)) return cache.get(key);

        const computation = dp(i + 1, sum + nums[i]) + dp(i + 1, sum - nums[i]);

        cache.set(key, computation);

        return computation;
    }
};