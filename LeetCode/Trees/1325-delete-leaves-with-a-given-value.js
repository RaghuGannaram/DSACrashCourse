/**
    @title 1325. Delete Leaves With a Given Value
    @url https://leetcode.com/problems/delete-leaves-with-a-given-value/
    @difficulty Medium

    @description
        Given a binary tree root and an integer target, delete all the leaf nodes with value target.

        Note that once you delete a leaf node with value target, if its parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you can't).

    @param {TreeNode} root - The root of the binary tree.
    @param {number} target - The target value to delete leaves.
    @return {TreeNode} - The root of the binary tree after deleting the leaves with value target.
 */

var removeLeafNodes = function (root, target) {
    const [node, eligible] = dfs(root);

    return eligible ? null : node;

    function dfs(node) {
        if (!node) return [null, false];

        if (dfs(node.left)[1]) node.left = null;
        if (dfs(node.right)[1]) node.right = null;

        return [node, !node.left && !node.right && node.val === target];
    }
};

var removeLeafNodes = function (root, target) {
    if (!root) return null; // If the root is null, return null

    // Recursively remove leaf nodes from the left and right subtrees
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);

    // If the current node is a leaf node and its value is equal to target, return null
    if (!root.left && !root.right && root.val === target) {
        return null;
    }

    // Otherwise, return the current node
    return root;
};
// Example usage:
