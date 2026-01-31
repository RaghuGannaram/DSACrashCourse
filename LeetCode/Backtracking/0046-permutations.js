/**
    @title 46. Permutations
    @difficulty Medium
    @url https://leetcode.com/problems/permutations/

    @description
        Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

    @param {number[]} nums
    @return {number[][]}
 */

var permute = function (nums) {
    const result = [],
        picked = new Set();

    backtrack(0, []);

    return result;

    function backtrack(pos, perm) {
        if (pos === nums.length) {
            result.push([...perm]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (picked.has(i)) continue;

            picked.add(i);
            perm.push(nums[i]);

            backtrack(pos + 1, perm);

            picked.delete(i);
            perm.pop();
        }
    }
};
let nums = [1, 2, 3];

console.log(permute(nums)); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
