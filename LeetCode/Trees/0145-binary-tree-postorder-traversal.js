/**
    @title 145. Binary Tree Postorder Traversal
    @difficulty easy
    @url https://leetcode.com/problems/binary-tree-postorder-traversal/

    @description
        Given the root of a binary tree, return the postorder traversal of its nodes' values.

    @param {TreeNode} root
    @return {number[]}
 */

var postOrderTraversalRecursive = function (root) {
    let res = [];

    dfs(root);

    return res;

    function dfs(node) {
        if (!node) return;

        dfs(node.left);
        dfs(node.right);
        res.push(node.val);
    }
};

var postOrderTraversalIterative = function (root) {
    let res = [],
        current,
        stack = [];

    if(!root) return res;
    stack.push(root);

    while (stack.length > 0) {
        current = stack.pop();

        res.push(current.val);

        current.left && stack.push(current.left);
        current.right && stack.push(current.right);
    }

    return res.reverse();
};
