/**
    @title 253. Meeting Rooms II
    @url https://leetcode.com/problems/meeting-rooms-ii/
    @difficulty Medium

    @description Given an array of meeting time intervals consisting of start and end times `[[s1,e1],[s2,e2],...]` (si < ei), find the minimum number of conference rooms required.
    
    @examples
    Example 1:
    Input: [[0,30],[5,10],[15,20]]
    Output: 2

    Example 2:
    Input: [[7,10],[2,4]]
    Output: 1

    @constraints
    - 0 <= intervals.length <= 10^4
    - intervals[i].length == 2
    - 0 <= starti < endi <= 10^6

    @note Two meetings [1,4] and [4,5] are considered non-overlapping.
 */

var minMeetingRooms_1 = function (intervals) {
    // 1. Create sorted lists of all start times and all end times
    let starts = intervals.map((i) => i[0]).sort((a, b) => a - b);
    let ends = intervals.map((i) => i[1]).sort((a, b) => a - b);

    let rooms = 0;
    let endIdx = 0;

    for (let i = 0; i < intervals.length; i++) {
        // If the current meeting starts BEFORE the earliest ending meeting finishes:
        // We need a NEW room.
        if (starts[i] < ends[endIdx]) {
            rooms++;
        }
        // Otherwise, a meeting ended. We REUSE that room.
        // Move to the next end time to check against future meetings.
        else {
            endIdx++;
        }
    }

    return rooms;
};

var minMeetingRooms_2 = function (intervals) {
    let starts = intervals.map((i) => i[0]).sort((a, b) => a - b);
    let ends = intervals.map((i) => i[1]).sort((a, b) => a - b);

    let s = 0,
        e = 0,
        active = 0,
        max = 0;

    while (s < starts.length) {
        if (starts[s] < ends[e]) {
            active++;
            s++;
        } else {
            active--;
            e++;
        }
        max = Math.max(max, active);
    }

    return max;
};
