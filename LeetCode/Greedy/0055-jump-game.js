/**
    @title 55. Jump Game
    @difficulty Medium
    @url https://leetcode.com/problems/jump-game/

    @description
        Given an array of non-negative integers, you are initially positioned at the first index of the array.
        Each element in the array represents your maximum jump length at that position.
        Determine if you are able to reach the last index.

    @param {number[]} nums
    @return {boolean}
 */

var canJump = function (nums) {
    let maxReachable = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReachable) {
            return false;
        }

        maxReachable = Math.max(maxReachable, i + nums[i]);

        if (maxReachable >= nums.length - 1) {
            return true;
        }
    }

    return true;
};
