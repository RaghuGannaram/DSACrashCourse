/**
    @title 139. Word Break
    @difficulty Medium
    @url https://leetcode.com/problems/word-break/

    @description
        Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
        Note that the same word in the dictionary may be reused multiple times in the segmentation.

        Example 1:
        Input: s = "leetcode", wordDict = ["leet","code"]
        Output: true

        Example 2:
        Input: s = "applepenapple", wordDict = ["apple","pen"]
        Output: true
 */

// Approach 1: Recursion with memoization
var wordBreak = function (s, wordDict) {
    const cache = new Map();

    return dfs(0);

    function dfs(index) {
        if (index === s.length) return true;

        if (cache.has(index)) {
            return cache.get(index);
        }

        let computation = false;

        for (let word of wordDict) {
            if (s.startsWith(word, index)) {
                if (dfs(index + word.length)) {
                    computation = true;
                }
            }
        }

        cache.set(index, computation);

        return computation;
    }
};

// Approach 2: Iteration with tabulation
var wordBreak = function (s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);

    dp[s.length] = true;

    for (let i = s.length - 1; i >= 0; i--) {
        for (let word of wordDict) {
            if (s.startsWith(word, i) && dp[i + word.length]) {
                dp[i] = true;
            }
        }
    }
    console.log(dp);

    return dp[0];
};
