/**
    @title 268. Missing Number
    @difficulty Easy
    @url https://leetcode.com/problems/missing-number/

    @description
        Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
        Example 1:
            Input: nums = [3,0,1]
            Output: 2
            Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
                         2 is the missing number in the range since it does not appear in nums.

    @parms {number[]} nums - an array containing n distinct numbers in the range [0, n]
    @return {number} - the only number in the range that is missing from the array
 */

var missingNumber1 = function (nums) {
    let res = 0;

    for (let i = 0; i < n; i++) {
        res = res ^ i;
    }

    for (const num of nums) {
        res = res ^ num;
    }

    return res;
};

var missingNumber2 = function (nums) {
    let res = 0;

    for (let i = 0; i <= nums.length; i++) {
        res = res ^ i ^ nums[i];
    }

    return res;
};
