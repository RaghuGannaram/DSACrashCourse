/** 
    @title 23. Merge k Sorted Lists
    @difficulty Hard
    @url https://leetcode.com/problems/merge-k-sorted-lists/

    @description
        You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
        Merge all the linked-lists into one sorted linked-list and return it.

    @param {ListNode[]} lists
    @return {ListNode}
 */

var mergeKLists = function (lists) {
    if (lists.length === 0) return null;

    return partition(0, lists.length - 1);

    function partition(start, end) {
        if (start === end) return lists[start];

        let mid = Math.floor((start + end) / 2);

        let list1 = partition(start, mid);
        let list2 = partition(mid + 1, end);

        return merge(list1, list2);
    }

    function merge(list1, list2) {
        let head = new ListNode(0),
            current;
        current = head;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        current.next = list1 || list2;
        return head.next;
    }
};
