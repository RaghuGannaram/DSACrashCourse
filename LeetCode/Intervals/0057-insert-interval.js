/**
    @title 57. Insert Interval
    @difficulty Medium
    @url https://leetcode.com/problems/insert-interval/

    @description
        You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.

        You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

        Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

    @param {number[][]} intervals
    @param {number[]} newInterval
    @return {number[][]}
 */

var insert = function (intervals, target) {
    let [start, end] = target,
        left = [],
        right = [];

    for (let current of intervals) {
        if (current[1] < start) {
            left.push(current);
            continue;
        }
        if (end < current[0]) {
            right.push(current);
            continue;
        }
        start = Math.min(start, current[0]);
        end = Math.max(end, current[1]);
    }

    return [...left, [start, end], ...right];
};
