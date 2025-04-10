/**
    @title 110. Balanced Binary Tree
    @difficulty easy
    @url https://leetcode.com/problems/balanced-binary-tree/

	@description
		Given a binary tree, determine if it is height-balanced.
		For this problem, a height-balanced binary tree is defined as:
		a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

	@param {TreeNode} root
	@return {boolean}
 */

var isBalanced1 = function (root) {
    const result = dfs(root);

    return result.balanced;

    function dfs(node) {
        if (!node) return { height: 0, balanced: true };

        const leftTree = dfs(node.left);
        const rightTree = dfs(node.right);

        const height = 1 + Math.max(leftTree.height, rightTree.height);
        const balanced = Math.abs(leftTree.height - rightTree.height) <= 1 && leftTree.balanced && rightTree.balanced;

        return { height, balanced };
    }
};

var isBalanced2 = function (root) {
    const res = dfs(root);

    return res.balanced;

    function dfs(node) {
        if (!node) {
            return { height: 0, balanced: true };
        }

        const left = dfs(node.left);
        const right = dfs(node.right);

        return {
            height: 1 + Math.max(left.height, right.height),
            balanced: left.balanced && right.balanced && Math.abs(left.height - right.height) <= 1,
        };
    }
};
