/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
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
            if (arr[index]) {
                root = new TreeNode(arr[index]);
                root.left = insertLevelOrder(arr, 2 * index + 1);
                root.right = insertLevelOrder(arr, 2 * index + 2);
            }
        }
    }
    return root;
}

//Approach 1: Recursive Inorder Traversal
var kthSmallest1 = function (root, k) {
    let list = [];

    dfs(root);

    return list[k - 1];

    function dfs(root) {
        if (!root) return;

        dfs(root.left);
        list.push(root.val);
        dfs(root.right);
    }
};

//Approach 2: Iterative Inorder Traversal with Stack
var kthSmallest2 = function (root, k) {
    let current = null,
        stack = [],
        sorted = [];

    current = root;

    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();

        sorted.push(current.val);
        if (sorted.length == k) return sorted.pop();

        current = current.right;
    }

    return sorted[k - 1];
};

let root = insertLevelOrder([3, 1, 4, null, 2]);
console.log(kthSmallest1(root, 1));
