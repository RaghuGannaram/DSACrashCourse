/**
    @title 90. Subsets II
    @difficulty Medium
    @url https://leetcode.com/problems/subsets-ii/

    @description
        Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

        The solution set must not contain duplicate subsets. Return the solution in any order.

    @param {number[]} nums
    @return {number[][]}
 */

var subsetsWithDup = function (nums) {
    const result = [];

    nums.sort((a, b) => a - b);

    backtrack(0, []);

    return result;

    function backtrack(i, subset) {
        if (i === nums.length) {
            result.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        backtrack(i + 1, subset);

        while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;

        subset.pop();
        backtrack(i + 1, subset);
    }
};

let nums = [1, 2, 2];

console.log(subsetsWithDup(nums)); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
