/**
    @title 338. Counting Bits
    @difficulty Easy
    @url https://leetcode.com/problems/counting-bits/

    @description
        Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.
        It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
        Space complexity should be O(n).

    @param {number} num
    @return {number[]}
 */

// Bottom up iterative approach
var countBits1 = function (num) {
    let res = new Array(num + 1).fill(0);

    for (let i = 1; i <= num; i++) {
        res[i] = res[i >> 1] + (i & 1);
    }

    return res;
};

// Bottom up iterative approach
var countBits2 = function (n) {
    let dp = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        dp[i] = dp[Math.floor(i / 2)] + (i % 2);
    }

    return dp;
};