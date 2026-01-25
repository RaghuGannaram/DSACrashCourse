/**
    @title 198. House Robber
    @difficulty Medium
    @url https://leetcode.com/problems/house-robber/

    @description
        You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you
        from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were
        broken into on the same night.
        Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without
        alerting the police.

    @param {number[]} nums
    @return {number}
 */

//Approach 1: Recursion with Memoization
var rob1 = function (nums) {
    if (nums.length === 1) return nums[0];

    const cache = new Map();

    const excludeLast = dfs(nums.length - 2, nums.slice(0, -1));

    cache.clear();
    const excludeFirst = dfs(nums.length - 2, nums.slice(1));

    return Math.max(excludeLast, excludeFirst);

    function dfs(index, nums) {
        if (index < 0) return 0;

        if (cache.has(index)) return cache.get(index);

        const computation = Math.max(dfs(index - 2, nums) + nums[index], dfs(index - 1, nums));

        cache.set(index, computation);

        return computation;
    }
};

//Approach 2: Iteration with Tabulation
var rob2 = function (nums) {
    const dp = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        dp[i] = Math.max((dp[i - 2] ?? 0) + nums[i], dp[i - 1] ?? 0);
    }

    return dp[nums.length - 1];
};

//Approach 3: Iteration with Space Optimization
var rob3 = function (nums) {
    let secondLast = null,
        last = null,
        current = null;

    for (let i = 0; i < nums.length; i++) {
        current = Math.max((secondLast ?? 0) + nums[i], last ?? 0);
        secondLast = last;
        last = current;
    }

    return current;
};
