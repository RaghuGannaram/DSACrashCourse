/**
    @title 73. Set Matrix Zeros
    @url https://leetcode.com/problems/set-matrix-zeroes/
    @difficulty Medium

    @description Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's.
    You must do it in place.

    @param {number[][]} matrix
    @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function (matrix) {
    let m = matrix.length,
        n = matrix[0].length,
        row0 = 1,
        col0 = 1;

    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) col0 = 0;
    }

    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) row0 = 0;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (row0 === 0) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    if (col0 === 0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};
