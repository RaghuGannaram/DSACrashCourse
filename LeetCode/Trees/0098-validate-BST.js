/**
    @title 98. Validate Binary Search Tree
    @difficulty Medium
    @url https://leetcode.com/problems/validate-binary-search-tree/

    @description    
        Given the root of a binary tree, determine if it is a valid binary search tree (BST).

        A valid BST is defined as follows:
            - The left subtree of a node contains only nodes with keys less than the node's key.
            - The right subtree of a node contains only nodes with keys greater than the node's key.
            - Both the left and right subtrees must also be binary search trees.


    @param {TreeNode} root
    @return {boolean}
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function insertLevelOrder(arr, index = 0) {
    let root = null;
    if (index < arr.length) {
        if (arr[index]) {
            root = new TreeNode(arr[index]);
            root.left = insertLevelOrder(arr, 2 * index + 1);
            root.right = insertLevelOrder(arr, 2 * index + 2);
        }
    }
    return root;
}

var isValidBST1 = function (root, min = -Infinity, max = Infinity) {
    if (!root) return true;

    if (root.val <= min || root.val >= max) return false;

    return isValidBST1(root.left, min, root.val) && isValidBST1(root.right, root.val, max);
};

var isValidBST2 = function (root) {
    if (!root) return true;

    return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

    function dfs(root, min, max) {
        if (!root) return true;

        if (root.val <= min || root.val >= max) return false;

        return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
    }
};

let root = insertLevelOrder([5, 1, 6]);

console.log(isValidBST1(root));
