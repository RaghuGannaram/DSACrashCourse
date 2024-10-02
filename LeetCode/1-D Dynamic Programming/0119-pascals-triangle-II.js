/**
    @title 119. Pascal's Triangle II
    @difficulty Easy
    @url https://leetcode.com/problems/pascals-triangle-ii/

    @description 
        Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.
    
    @param {number} rowIndex
    @return {number[]}
 */

// Bottom up iterative approach
var getRowIterative = function (rowIndex) {
    let dp = new Array(rowIndex + 1);

    dp[0] = 1;

    for (let i = 1; i <= rowIndex; i++) {
        dp[i] = (dp[i - 1] * (rowIndex - i + 1)) / i;
    }

    return dp;
};
