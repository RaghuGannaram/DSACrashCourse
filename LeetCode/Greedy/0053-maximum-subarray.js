/**
    @title 53. Maximum Subarray
    @difficulty Medium
    @url https://leetcode.com/problems/maximum-subarray/

    @description
        Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

    @param {number[]} nums
    @return {number}
 */

var maxSubArray = function (nums) {
    let currentSum = 0,
        maxSum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        maxSum = Math.max(maxSum, currentSum);

        currentSum = Math.max(currentSum, 0);
    }

    return maxSum;
};
