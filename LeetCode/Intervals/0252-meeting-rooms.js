/**
    @title 252. Meeting Rooms
    @url https://leetcode.com/problems/meeting-rooms/
    @difficulty Easy

    @description Given an array of meeting time intervals consisting of start and end times `[[s1,e1],[s2,e2],...]` (si < ei), determine if a person could attend all meetings.

    @examples
    Example 1:
    Input: [[0,30],[5,10],[15,20]]
    Output: false

    Example 2:
    Input: [[7,10],[2,4]]
    Output: true

    @constraints
    - 0 <= intervals.length <= 10^4
    - intervals[i].length == 2
    - 0 <= starti < endi <= 10^6

    @note Two meetings [1,4] and [4,5] are considered non-overlapping.
 */

var canAttend = function (intervals) {
    if (intervals.length <= 1) return true;

    intervals.sort((a, b) => a[0] - b[0]);

    for (let last, current, i = 1; i < intervals.length; i++) {
        last = intervals[i - 1];
        current = intervals[i];

        if (last[1] > current[0]) {
            return false;
        }
    }

    return true;
};
