/**
 	@title 104. Maximum Depth of Binary Tree
 	@difficulty easy
 	@url https://leetcode.com/problems/maximum-depth-of-binary-tree/

	@description
		Given the root of a binary tree, return its maximum depth.
		A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

	@param {TreeNode} root
	@return {number}
 */

var maxDepth = function (root) {
    return dfs(root, 0);

    function dfs(node, depth) {
        if (!node) return depth;

        return Math.max(dfs(node.left, depth + 1), dfs(node.right, depth + 1));
    }
};

var maxDepthIterative = function (root) {
    if (!root) return 0;

    let stack = [[root, 1]],
        maxDepth = 0;

    while (stack.length) {
        let [node, depth] = stack.pop();

        maxDepth = Math.max(maxDepth, depth);

        node.left && stack.push([node.left, depth + 1]);
        node.right && stack.push([node.right, depth + 1]);
    }

    return maxDepth;
};
