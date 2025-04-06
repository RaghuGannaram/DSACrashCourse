/**
    @title 1143. Longest Common Subsequence
    @difficulty Medium
    @url https://leetcode.com/problems/longest-common-subsequence/

    @description
        Given two strings text1 and text2, return the length of their longest common subsequence.
        If there is no common subsequence, return 0.

        A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
        (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

        A common subsequence of two strings is a subsequence that is common to both strings.

    @param {string} text1
    @param {string} text2
    @return {number}

*/

// Approach 1: Recursion with memoization
var longestCommonSubsequence1 = function (text1, text2) {
    const cache = new Map();

    return dp(0, 0);

    function dp(i, j) {
        if (i >= text1.length || j >= text2.length) return 0;

        const key = `${i}-${j}`;

        if (cache.has(key)) return cache.get(key);

        let computation;

        if (text1[i] === text2[j]) {
            computation = 1 + dp(i + 1, j + 1);
        } else {
            computation = Math.max(dp(i, j + 1), dp(i + 1, j));
        }

        cache.set(key, computation);

        return computation;
    }
};

// Approach 2: Iteration with tabulation
var longestCommonSubsequence2 = function (text1, text2) {
    const m = text1.length,
        n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }

    return dp[0][0];
};
