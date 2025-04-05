/** 
    @title 213. House Robber II
    @difficulty Medium
    @url https://leetcode.com/problems/house-robber-ii/

    @description
        You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged
        in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically
        contact the police if two adjacent houses were broken into on the same night.
        Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without
        alerting the police.

    @param {number[]} nums
    @return {number}
 */

// Approach 1: Recursion with Memoization (Time Limit Exceeded)
var rob1 = function (nums) {
    const cache = new Map();

    if (nums.length === 1) return nums[0];

    return Math.max(dp(0, nums.slice(0, -1)), dp(0, nums.slice(1)));

    function dp(i, arr) {
        if (i >= arr.length) return 0;

        if (cache.has(i)) return cache.get(i);

        const computation = Math.max(arr[i] + dp(i + 2, arr), dp(i + 1, arr));

        return computation;
    }
};

// Approach 2: Iteration with Tabulation
var rob2 = function (nums) {
    if (nums.length === 1) return nums[0];

    return Math.max(cleverRob(nums.slice(0, -1)), cleverRob(nums.slice(1)));

    function cleverRob(arr) {
        const dp = new Array(arr.length);

        for (let i = 0; i < arr.length; i++) {
            dp[i] = Math.max((dp[i - 2] ?? 0) + arr[i], dp[i - 1] ?? 0);
        }

        return dp[arr.length - 1];
    }
};
