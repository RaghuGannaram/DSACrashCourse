/**
    @title  91. Decode Ways
    @difficulty Medium
    @url https://leetcode.com/problems/decode-ways/

    @description
        A message containing letters from A-Z is being encoded to numbers using the following mapping:
        'A' -> 1
        'B' -> 2
        ...
        'Z' -> 26
        Given a non-empty string containing only digits, determine the total number of ways to decode it.

    @param {string} s
    @return {number}
 */

var numDecodings = function (s) {
    const dp = new Array(s.length).fill(0);

    if (s[0] === "0") return 0;

    dp[0] = 1;

    for (let i = 1; i < s.length; i++) {
        const single = parseInt(s[i]);
        const double = parseInt(s.slice(i - 1, i + 1));

        if (1 <= single && single <= 9) {
            dp[i] += dp[i - 1];
        }

        if (10 <= double && double <= 26) {
            dp[i] += dp[i - 2] ?? 1;
        }
    }

    return dp.at(-1);
};

// console.log(numDecodings("2906"));
// console.log(numDecodings("1210"));
console.log(numDecodings("1212"));
