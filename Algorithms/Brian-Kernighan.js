/**
 * Brian Kernighan’s Algorithm for Counting Set Bits (Hamming Weight)
 *
 * Given a positive integer `n`, return the number of 1 bits (set bits) in its binary representation.
 *
 * Algorithm:
 * 1. Initialize a counter to 0.
 * 2. While n is not equal to 0:
 *    - Apply the operation `n = n & (n - 1)`. This operation removes the rightmost set bit.
 *    - Increment the counter.
 * 3. When n becomes 0, the counter contains the number of set bits.
 *
 * Why it works:
 * - Subtracting 1 from a number flips all the bits after the rightmost 1 (inclusive).
 * - Doing `n & (n - 1)` clears the lowest set bit in `n`.
 * - So each iteration removes one set bit, and we count how many times we can do that until `n` is zero.
 *
 * Example (n = 11):
 * -------------------------------------
 * Step 1:
 * n       = 11     (binary: 1011)
 * n - 1   = 10     (binary: 1010)
 * n & n-1 = 10     (binary: 1010)
 * count   = 1
 *
 * Step 2:
 * n       = 10     (binary: 1010)
 * n - 1   = 9      (binary: 1001)
 * n & n-1 = 8      (binary: 1000)
 * count   = 2
 *
 * Step 3:
 * n       = 8      (binary: 1000)
 * n - 1   = 7      (binary: 0111)
 * n & n-1 = 0      (binary: 0000)
 * count   = 3
 *
 * Now n = 0, so we stop. Final count = 3 set bits in binary 1011.
 *
 * Uses:
 * 1. Efficient way to count set bits in an integer.
 * 2. Used in low-level bitwise operations, cryptography, and network algorithms.
 *
 * Time Complexity : O(1) — Runs in at most 32 iterations for 32-bit integers.
 * Space Complexity: O(1)
 */

function hammingWeight(n) {
    let count = 0;
    while (n !== 0) {
        n = n & (n - 1); // removes the rightmost set bit
        count++;
    }
    return count;
}

// Test cases
console.log(hammingWeight(11)); // Output: 3 (binary: 1011)
console.log(hammingWeight(128)); // Output: 1 (binary: 10000000)
console.log(hammingWeight(2147483645)); // Output: 30 (binary: 111...1101)
