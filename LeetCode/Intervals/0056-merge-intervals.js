/**
    @title 56. Merge Intervals
    @difficulty Medium
    @url https://leetcode.com/problems/merge-intervals/

    @description
        Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

    @param {number[][]} intervals
    @return {number[][]}
 */

var merge = function (intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let last, current, i = 1; i < intervals.length; i++) {
        last = result.at(-1);
        current = intervals[i];

        if (last[1] >= current[0]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            result.push(current);
        }
    }

    return result;
};
