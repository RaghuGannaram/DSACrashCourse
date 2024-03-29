/**
	@title 199. Binary Tree Right Side View
	@difficulty medium
	@url https://leetcode.com/problems/binary-tree-right-side-view/

	@description
		Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
		Example 1:
			Input: root = [1,2,3,null,5,null,4]
			Output: [1,3,4]
		Example 2:
			Input: root = [1,null,3]
			Output: [1,3]
		Example 3:
			Input: root = []
			Output: []

	@param {TreeNode} root
	@return {number[]}
 */

var rightSideViewRecursive = function (root) {
    let res = [];

    if (!root) return res;

    dfs(root, 0);

    return res;

    function dfs(node, depth) {
        if (!node) return;

        res[depth] = node.val;

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }
};

var rightSideViewIterative = function (root) {
    let res = [],
        current,
        view,
        queue = [],
        l;

    if (!root) return res;

    queue.push(root);

    while (queue.length > 0) {
        l = queue.length;

        for (let i = 0; i < l; i++) {
            current = queue.shift();
            view = current.val;

            current.left && queue.push(current.left);
            current.right && queue.push(current.right);
        }

        res.push(view);
    }
    return res;
};
