/**
    @title 190. Reverse Bits
    @difficulty Easy
    @url https://leetcode.com/problems/reverse-bits/

    @description
        Reverse bits of a given 32 bits unsigned integer.
        Example 1:
            Input: n = 00000010100101000001111010011100
            Output:    00111001011110000010100101000000
            Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, 
                         so return 964176192 which its binary representation is 00111001011110000010100101000000.            


    @parms {number} n - a 32 bits unsigned integer
    @return {number} - a 32 bits unsigned integer
*/

var reverseBits1 = function (n) {
    let res = 0;

    for (let bit, i = 0; i < 32; i++) {
        bit = n & (1 << 0);
        res = (res << 1) | bit;
        n = n >>> 1;
    }

    return res;
};

var reverseBits2 = function (n) {
    let res = 0;

    for (let bit, i = 0; i < 32; i++) {
        bit = (n >>> i) & 1;
        res = res | (bit << (31 - i));
    }

    return res;
};
