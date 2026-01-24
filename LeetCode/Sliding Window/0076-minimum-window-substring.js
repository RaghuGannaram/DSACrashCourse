/**
    @title 76. Minimum Window Substring
    @difficulty Hard
    @url https://leetcode.com/problems/minimum-window-substring/

    @description
        Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
        The testcases will be generated such that the answer is unique.
        A substring is a contiguous sequence of characters within the string.

    @param {string} s
    @param {string} t
    @return {string}
 */

var minWindow_1 = function (s, t) {
    let l = 0,
        r = 0,
        map = new Map(),
        count = t.length,
        start = 0,
        min = Number.MAX_SAFE_INTEGER;

    for (let char of t) {
        map.set(char, (map.get(char) ?? 0) + 1);
    }

    while (r < s.length) {
        if (map.get(s[r]) > 0) {
            count--;
        }
        map.set(s[r], (map.get(s[r]) ?? 0) - 1);
        r++;

        while (count === 0) {
            if (r - l < min) {
                start = l;
                min = r - l;
            }

            if (map.get(s[l]) === 0) {
                count++;
            }
            map.set(s[l], (map.get(s[l]) ?? 0) + 1);
            l++;
        }
    }

    return min === Number.MAX_SAFE_INTEGER ? "" : s.slice(start, start + min);
};

var minWindow_2 = function (s, t) {
    let l = 0,
        r = 0,
        res = [0, Number.MAX_SAFE_INTEGER],
        needCount = t.length,
        freqMap = new Map();

    for (let ch of t) {
        freqMap.set(ch, (freqMap.get(ch) ?? 0) + 1);
    }

    while (r < s.length) {
        if (freqMap.get(s[r]) > 0) needCount--;

        freqMap.set(s[r], (freqMap.get(s[r]) ?? 0) - 1);

        while (needCount === 0) {
            if (r - (l - 1) < res[1] - res[0]) {
                res = [l, r + 1];
            }

            if (freqMap.get(s[l]) === 0) needCount++;
            freqMap.set(s[l], (freqMap.get(s[l]) ?? 0) + 1);
            l++;
        }
        r++;
    }

    return res[1] === Number.MAX_SAFE_INTEGER ? "" : s.slice(res[0], res[1]);
};

console.log(minWindow_2("ADOBECODEBANC", "ABC"));
