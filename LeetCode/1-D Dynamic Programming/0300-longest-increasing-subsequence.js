/**
    @title 300. Longest Increasing Subsequence
    @difficulty Medium
    @url https://leetcode.com/problems/longest-increasing-subsequence/

    @description
        Given an integer array nums, return the length of the longest strictly increasing subsequence.
        A subsequence is a sequence that can be derived from another sequence by deleting some elements without changing the order of the remaining elements.

        Example 1:
        Input: nums = [10,9,2,5,3,7,101,18]
        Output: 4
        Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
        
        Example 2:
        Input: nums = [0,1,0,3,2,3]
        Output: 4
        Explanation: The longest increasing subsequence is [0,1,2,3], therefore the length is 4.
        
        Example 3:
        Input: nums = [7,7,7,7,7,7,7]
        Output: 1
        Explanation: The longest increasing subsequence is [7], therefore the length is 1.
        
        Constraints:
        1 <= nums.length <= 2500
        -10^4 <= nums[i] <= 10^4
        Follow up:
        Can you come up with an algorithm that runs in O(n log(n)) time complexity?

*/

//Approach 1: Iteration with tabulation
var lengthOfLIS = function (nums) {
    const dp = new Array(nums.length).fill(1);

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }

    return Math.max(...dp);
};
