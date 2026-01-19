/**
	@title 206. Reverse Linked List
	@difficulty Easy
	@url https://leetcode.com/problems/reverse-linked-list/

	@description
		Given the head of a singly linked list, reverse the list, and return the reversed list.

	@params {ListNode} head
	@return {ListNode}
 */

var reverseList = function (head) {
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
};

var reverseList2 = function (head) {
    return reverse(head, null);

    function reverse(current, prev) {
        if (!current) return prev;

        const next = current.next;
        current.next = prev;

        return reverse(next, current);
    }
};

let head = generateLinkedList([1, 2, 3, 4, 5]);
console.log(reverseList(head));
