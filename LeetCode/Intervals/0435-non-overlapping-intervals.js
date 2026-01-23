/**
    @title 435. Non-overlapping Intervals
    @difficulty Medium
    @url https://leetcode.com/problems/non-overlapping-intervals/

    @description
        Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
    
    @param {number[][]} intervals
    @return {number}
 */

var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0,
        freeAt = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < freeAt) {
            count++;
        } else {
            freeAt = intervals[i][1];
        }
    }

    return count;
};
