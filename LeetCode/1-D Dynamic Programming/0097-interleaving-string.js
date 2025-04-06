/**
    @title 97. Interleaving String
    @difficulty Medium
    @url https://leetcode.com/problems/interleaving-string/

    @description
        Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
        An interleaving of two strings s and t is a configuration where they are divided into non-empty substrings such that:
        - s = s1 + s2 + ... + sn
        - t = t1 + t2 + ... + tm
        - |s| == n
        - |t| == m
        - |s| + |t| == |s3|
        - The substrings of s are interleaved with the substrings of t.
        - The substrings of s and t are non-empty.

    @param {string} s1
    @param {string} s2
    @param {string} s3
    @return {boolean}
*/

//Approach 1: Recursion with Memoization
var isInterleave1 = function (s1, s2, s3) {
    const cache = new Map();

    if (s1.length + s2.length !== s3.length) return false;

    return dp(0, 0);

    function dp(p, q) {
        if (p === s1.length && q === s2.length) return true;

        if (s1[p] !== s3[p + q] && s2[q] !== s3[p + q]) return false;

        const key = `${p}-${q}`;
        if (cache.has(key)) return cache.get(key);

        let computation;

        if (s1[p] === s3[p + q] && s2[q] === s3[p + q]) {
            computation = dp(p + 1, q) || dp(p, q + 1);
        } else {
            computation = s1[p] === s3[p + q] ? dp(p + 1, q) : dp(p, q + 1);
        }

        cache.set(key, computation);

        return computation;
    }
};

// Approach 2: Iteration with Tabulation
var isInterleave2 = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;

    const dp = Array.from({ length: s1.length + 1 }, () => new Array(s2.length + 1).fill(false));

    dp[s1.length][s2.length] = true;

    for (let i = s1.length; i >= 0; i--) {
        for (let j = s2.length; j >= 0; j--) {
            if (i < s1.length && s1[i] === s3[i + j] && dp[i + 1][j]) dp[i][j] = true;
            if (j < s2.length && s2[j] === s3[i + j] && dp[i][j + 1]) dp[i][j] = true;
        }
    }

    return dp[0][0];
};
