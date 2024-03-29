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

var rob = function (nums) {
    if (nums.length === 1) return nums[0];

    return Math.max(cleverRob(nums.slice(0, -1)), cleverRob(nums.slice(1)));

    function cleverRob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];

        let dp = new Array(nums.length);

        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        }

        return dp.at(-1);
    }
};
