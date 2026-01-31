/**
    @title 47. Permutations II
    @difficulty Medium
    @url https://leetcode.com/problems/permutations-ii/

    @description
        Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

    @param {number[]} nums
    @return {number[][]}
 */

var permuteUnique1 = function (nums) {
    const result = [],
        picked = new Set();

    nums.sort((a, b) => a - b);

    backtrack(0, []);

    return result;

    function backtrack(pos, perm) {
        if (pos === nums.length) {
            result.push([...perm]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (picked.has(i)) continue;

            if (0 < i && nums[i - 1] === nums[i] && !picked.has(i - 1)) continue;

            picked.add(i);
            perm.push(nums[i]);

            backtrack(pos + 1, perm);

            picked.delete(i);
            perm.pop();
        }
    }
};

var permuteUnique2 = function (nums) {
    let res = [],
        set = new Set(),
        visited = new Set();
    nums.sort((a, b) => a - b);

    backtrack([]);

    return res;

    function backtrack(cur) {
        if (cur.length === nums.length) {
            if (!set.has(cur.join("-"))) {
                set.add(cur.join("-"));
                res.push([...cur]);
            }
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!visited.has(i)) {
                visited.add(i);
                cur.push(nums[i]);
                backtrack(cur);
                cur.pop();
                visited.delete(i);
            }
        }
    }
};

let nums = [1, 1, 2];

console.log(permuteUnique1(nums)); // [[1,1,2],[1,2,1],[2,1,1]]
