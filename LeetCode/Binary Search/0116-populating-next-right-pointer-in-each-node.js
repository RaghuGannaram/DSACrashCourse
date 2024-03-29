/**
    @url https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
    @title 116. Populating Next Right Pointers in Each Node
    @difficulty Medium

    @description
        You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:
        struct Node {
            int val;
            Node *left;
            Node *right;
            Node *next;
        }

        Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
        Initially, all next pointers are set to NULL.

    @param {Node} root
    @return {Node}
 */

var connect = function (root) {
    if (!root) return null;

    let queue = [], l, node;

    queue.push(root);

    while (queue.length > 0) {
        l = queue.length;

        for (let i = 0; i < l; i++) {
            node = queue.shift();
            node.next = (i < l - 1) ? queue[0] : null;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return root;
};

let root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null,
            next: null
        },
        right: {
            val: 5,
            left: null,
            right: null,
            next: null
        },
        next: null
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null,
            next: null
        },
        right: {
            val: 7,
            left: null,
            right: null,
            next: null
        },
        next: null
    },
    next: null
};

console.log(connect(root));