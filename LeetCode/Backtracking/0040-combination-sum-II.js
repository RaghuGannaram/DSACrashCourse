/**
    @title 40. Combination Sum II
    @difficulty Medium
    @url https://leetcode.com/problems/combination-sum-ii/

    @description
        Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
        Each number in candidates may only be used once in the combination.
        Note: The solution set must not contain duplicate combinations.

    @param {number[]} candidates
    @param {number} target
    @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
    const result = [];

    candidates.sort((a, b) => a - b);

    backtrack(0, [], 0);

    return result;

    function backtrack(i, comb, sum) {
        if (sum === target) {
            result.push([...comb]);
            return;
        }

        if (candidates.length <= i || target < sum) {
            return;
        }

        comb.push(candidates[i]);
        backtrack(i + 1, comb, sum + candidates[i]);

        while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) i++;

        comb.pop();
        backtrack(i + 1, comb, sum);
    }
};

let candidates = [10, 1, 2, 7, 6, 1, 5],
    target = 8;

console.log(combinationSum2(candidates, target)); // [[1,1,6],[1,2,5],[1,7],[2,6]]
