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
    const cache = new Map();

    return dp(0);

    function dp(i) {
        if (i >= nums.length) return 0;

        if (cache.has(i)) return cache.get(i);

        const computation = Math.max(nums[i] + dp(i + 2), dp(i + 1));

        cache.set(i, computation);

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
    let secondLast, last, current;

    secondLast = nums[0];
    last = Math.max(nums[0], nums[1] ?? 0);

    for (let i = 2; i < nums.length; i++) {
        current = Math.max(secondLast + nums[i], last);
        secondLast = last;
        last = current;
    }

    return last;
};
