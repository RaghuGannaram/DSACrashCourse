/**
    @title 96. Unique Binary Search Trees
    @difficulty Medium
    @url https://leetcode.com/problems/unique-binary-search-trees/

    @description
        Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

        For example,
        Given n = 3, there are a total of 5 unique BST's.
        1         3     3      2      1
         \       /     /      / \      \
          3     2     1      1   2      2
         /     /       \                 \
        2     1         2                 3
        Note: n is a positive integer and will not exceed 100.
        The answer is guaranteed to be less than or equal to 2^31 - 1.
    @param {number} n
    @return {number}

*/

//Approach 1: Recursion with memoization
var numTrees1 = function (n) {
    const cache = new Map();

    return dp(n);

    function dp(n) {
        if (n <= 1) return 1;

        if (cache.has(n)) return cache.get(n);

        let total = 0;

        for (let i = 1; i <= n; i++) {
            total += dp(i - 1) * dp(n - i);
        }

        cache.set(n, total);

        return total;
    }
};

//Approach 2: Iteration with tabulation
var numTrees2 = function (n) {
    const dp = new Array(n + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let total, i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }

    return dp[n];
};
