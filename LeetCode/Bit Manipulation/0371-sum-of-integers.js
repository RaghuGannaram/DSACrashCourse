/**
    @title 371. Sum of Two Integers
    @difficulty Medium
    @url https://leetcode.com/problems/sum-of-two-integers/

    @description
        Given two integers a and b, return the sum of the two integers without using the operators + and -.

    @parms {number} a
    @parms {number} b
    @return {number}
 */

var getSum = function (a, b) {
    let sum, carry;

    while (b !== 0) {
        sum = a ^ b;
        carry = (a & b) << 1;
        a = sum;
        b = carry;
    }

    return a;
};
