/**
    @title 119. Pascal's Triangle II
    @difficulty Easy
    @url https://leetcode.com/problems/pascals-triangle-ii/

    @description 
        Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.
    
    @param {number} rowIndex
    @return {number[]}
 */

var getRow1 = function (rowIndex) {
    let current = [1];

    for (let i = 0; i < rowIndex; i++) {
        current = [1, ...next(current), 1];
    }

    return current;

    function next(arr) {
        let res = [];

        for (let i = 0; i < arr.length - 1; i++) {
            res.push(arr[i] + arr[i + 1]);
        }

        return res;
    }
};

var getRow2 = function (rowIndex) {
    let current = [1];

    for (let i = 0; i < rowIndex; i++) {
        current = [1, ...current.slice(0, -1).map((n, i) => n + current[i + 1]), 1];
    }

    return current;
};

let input = 5;

console.log(getRow1(input));
console.log(getRow2(input));
