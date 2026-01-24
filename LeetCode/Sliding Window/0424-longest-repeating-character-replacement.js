/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function (s, k) {
    let l = 0,
        r = 0,
        ch,
        maxFreq = 0,
        freqMap = new Map(),
        res = 0;

    while (r < s.length) {
        ch = s[r];

        freqMap.set(ch, (freqMap.get(ch) ?? 0) + 1);
        maxFreq = Math.max(maxFreq, freqMap.get(ch));

        while (r - (l - 1) - maxFreq > k) {
            freqMap.set(s[l], (freqMap.get(s[l]) ?? 0) - 1);
            l++;
        }
        res = Math.max(res, r - (l - 1));
        r++;
    }

    return res;
};

console.log(characterReplacement("ABAAABAA", 1));
