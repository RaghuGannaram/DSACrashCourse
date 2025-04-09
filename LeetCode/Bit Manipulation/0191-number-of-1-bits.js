/**
    @title 191. Number of 1 Bits
    @difficulty Easy
    @url https://leetcode.com/problems/number-of-1-bits/

    @description
        Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

        Note:
        Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, regardless of whether it is signed or unsigned.

        In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer -3.

        Follow up:
        If this function is called many times, how would you optimize it?

    @params {number} n
    @return {number}
 */

var hammingWeight = function (n) {
    let count = 0;

    while (n !== 0) {
        n = n & (n - 1);
        count++;
    }

    return count;
};
