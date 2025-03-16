/**
    @title 118. Pascal's Triangle
    @difficulty easy
    @url https://leetcode.com/problems/pascals-triangle/
 
    @description
        Given an integer numRows, return the first numRows of Pascal's triangle.
        In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
        https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif

    @param {number} numRows
    @return {number[][]}
 */

// Bottom up iterative approach
var generate = function (numRows) {
    let triangle = new Array(numRows);

    for (let row = 0; row < numRows; row++) {
        rowLength = row + 1;
        triangle[row] = new Array(rowLength);
        triangle[row][0] = triangle[row][rowLength - 1] = 1;

        for (let i = 1; i < rowLength - 1; i++) {
            triangle[row][i] = triangle[row][i - 1] * ((row - i + 1) / i);
        }
    }

    return triangle;
};