/**
    @title 0983. Minimum Cost For Tickets
    @difficulty Medium
    @url https://leetcode.com/problems/minimum-cost-for-tickets/

    @description
        In a country popular for train travel, you have planned some train travelling one year in advance. The days of the year that you will travel is given as an integer array days. Each day is one of the following three options:

        1. A 1-day pass costs $costs[0] dollars;
        2. A 7-day pass costs $costs[1] dollars;
        3. A 30-day pass costs $costs[2] dollars.

        The passes allow that many days of consecutive travel.

        For example, if we get a 7-day pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.

        Return the minimum number of dollars you need to travel every day in the given list of days.

    @param {number[]} days
    @param {number[]} costs
    @return {number}x
*/



var mincostTickets = function (days, costs) {
    const map = new Map([[1, costs[0]], [7, costs[1]], [30, costs[2]]]);

    return dp(days[0]);

    function dp(day) {
        
        if (day > days.at(-1)) return 0;

        let computation = Number.MAX_SAFE_INTEGER;

        for (let [pass, charge] of map) {
            let nextDay = days.find(d => d > day + pass);
            computation = Math.min(computation, charge + dp(nextDay));
        }

        return computation;
    }
};

mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]); // Output: 11