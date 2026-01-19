/**
	@title 143. Reorder List
	@difficulty Medium
	@url https://leetcode.com/problems/reorder-list/

	@description
		Given the head of a singly linked list L: L0→L1→…→Ln-1→Ln,
		reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

		You may not modify the values in the list's nodes. Only nodes themselves may be changed.

	@params {ListNode} head
	@return {void} Do not return anything, modify head in-place instead.
 */

var reorderList1 = function (head) {
    let slow = head,
        fast = head.next,
        tail;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    tail = reverse(slow.next);
    slow.next = null;

    return merge(head, tail);

    function reverse(head) {
        let prev = null,
            current = head,
            next;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }

    function merge(list1, list2) {
        let p1 = list1,
            p2 = list2,
            t1,
            t2;

        while (p2) {
            t1 = p1.next;
            t2 = p2.next;

            p1.next = p2;
            p2.next = t1;

            p1 = t1;
            p2 = t2;
        }

        return list1;
    }
};

var reorderList2 = function (head) {
    let slow = head,
        fast = head,
        tail;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    tail = reverse(slow.next);
    slow.next = null;

    return merge(head, tail);

    function merge(l1, l2) {
        if (!l1 || !l2) {
            return !l1 ? l2 : l1;
        }
        let t1 = l1.next,
            t2 = l2.next;

        l1.next = l2;
        l2.next = merge(t1, t2);

        return l1;
    }

    function reverse(head) {
        return reverseHelper(head, null);

        function reverseHelper(current, prev) {
            if (!current) return prev;
            const next = current.next;
            current.next = prev;

            return reverseHelper(next, current);
        }
    }
};
