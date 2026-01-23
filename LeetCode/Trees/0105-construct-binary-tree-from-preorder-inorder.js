/**
    @title 105. Construct Binary Tree from Preorder and Inorder Traversal
    @difficulty Medium
    @url https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

    @description    
        Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

    @param {number[]} preorder
    @param {number[]} inorder
    @return {TreeNode}
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return null;
    }

    let root = new TreeNode(preorder[0]);
    let mid = inorder.indexOf(root.val);

    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
    
    return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
