function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

let apple = new Node(10);
apple.left = new Node(20);
apple.right = new Node(30);
apple.left.left = new Node(40);
apple.left.right = new Node(50);
apple.right.left = new Node(60);
apple.right.right = new Node(70);

//         10
//     /       \
//    20       30
//   /  \     /  \
// 40    50  60   70

console.log(apple);
console.log(typeof apple);
console.log(apple instanceof Node);

//------------BFS | Level Order Traversal| Time Complexity = O(n) | Space Complexity = O(n)-----------------------------------
function levelOrderTraversal(root) {
    let current,
        queue = [],
        result = [];

    if (!root) {
        return result;
    }

    queue.push(root);

    while (queue.length > 0) {
        current = queue.shift();

        result.push(current.val);

        current.left !== null && queue.push(current.left);
        current.right !== null && queue.push(current.right);
    }
    return result;
}

console.log(levelOrderTraversal(apple));

//-------------------------------------------------PreOrder Traversal----------------------------------------------
function travelPreOrderDFS(root) {
    let result = [];

    dfs(root);

    return result;

    function dfs(node) {
        if (!node) return;

        result.push(node.val);

        dfs(node.left);
        dfs(node.right);
    }
}

function travelPreOrderBFS(root) {
    let current = null,
        stack = [],
        result = [];

    if (!root) return result;

    stack.push(root);

    while (stack.length > 0) {
        current = stack.pop();

        result.push(current.val);

        current.right && stack.push(current.right);
        current.left && stack.push(current.left);
    }
    return result;
}

//         10
//     /       \
//    20       30
//   /  \     /  \
// 40    50  60   70

//10 20 40 50 30 60 70

console.log(travelPreOrderDFS(apple));
console.log(travelPreOrderBFS(apple));

function serializePreOrderDFS(root) {
    let result = [];

    dfs(root);
    return result;

    function dfs(node) {
        if (!node) {
            result.push(null);
            return;
        }

        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
}

function serializePreOrderBFS(root) {
    let current = null,
        stack = [],
        result = [];

    if (!root) return result;

    stack.push(root);

    while (stack.length > 0) {
        current = stack.pop();

        result.push(current?.val ?? null);

        current && stack.push(current.right);
        current && stack.push(current.left);
    }
    return result;
}

console.log(serializePreOrderDFS(apple));

function deserializePreOrder(arr) {
    let current,
        index = 0;

    return construct();

    function construct() {
        if (arr.length <= index) {
            return null;
        }

        current = arr[index];
        index++;

        if (current === null) {
            return null;
        }

        let node = new Node(current);

        node.left = construct();
        node.right = construct();

        return node;
    }
}
const preorderedArray = serializePreOrderDFS(apple);
const constructedPreorderTree = deserializePreOrder(preorderedArray);

console.log(preorderedArray);
console.log(constructedPreorderTree);

//-------------------------------------------------InOrder Traversal----------------------------------------------

function travelInOrderDFS(root) {
    let result = [];

    dfs(root);

    return result;

    function dfs(node) {
        if (!node) return;

        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
}

function travelInOrderBFS(root) {
    let current,
        stack = [],
        result = [];

    current = root;

    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }

    return result;
}

//         10
//     /       \
//    20       30
//   /  \     /  \
// 40    50  60   70

// 40 20 50 10 60 30 70

console.log(travelInOrderDFS(apple));
console.log(travelInOrderBFS(apple));

function deserializeInOrder(arr) {
    return construct(0, arr.length - 1);

    function construct(start, end) {
        if (start > end) {
            return null;
        }

        let mid = Math.floor((start + end) / 2);
        
        let node = new Node(arr[mid]);

        node.left = construct(start, mid - 1);
        node.right = construct(mid + 1, end);

        return node;
    }
}

const inOrderArray = [40, 20, 50, 10, 60, 30, 70];
const constructedInOrderTree = deserializeInOrder(inOrderArray);

console.log(constructedInOrderTree);

//-------------------------------------------------PostOrder Traversal----------------------------------------------
function travelPostOrderDFS(root) {
    let result = [];

    dfs(root);

    return result;

    function dfs(node) {
        if (!node) return;

        dfs(node.left);
        dfs(node.right);
        result.push(node.val);
    }
}

function travelPostOrderBFS(root) {
    let current = null,
        stack = [],
        result = [];

    if (!root) return result;

    stack.push(root);

    while (stack.length > 0) {
        current = stack.pop();

        result.push(current.val);

        current.left && stack.push(current.left);
        current.right && stack.push(current.right);
    }

    return result.reverse();
}

//         10
//     /       \
//    20       30
//   /  \     /  \
// 40    50  60   70

// 40 50 20 60 70 30 10

console.log(travelPostOrderDFS(apple));
console.log(travelPostOrderBFS(apple));

function serializePostOrderDFS(root) {
    let result = [];

    dfs(root);

    return result;

    function dfs(node) {
        if (!node) {
            result.push(null);
            return;
        }

        dfs(node.left);
        dfs(node.right);
        result.push(node.val);
    }
}

function serializePostOrderBFS(root) {
    let current = null,
        stack = [],
        result = [];

    if (!root) return result;

    stack.push(root);

    while (stack.length > 0) {
        current = stack.pop();

        result.push(current?.val ?? null);
        current && stack.push(current.left);
        current && stack.push(current.right);
    }
    return result.reverse();
}

function deserializePostOrder(arr) {
    let current,
        index = arr.length - 1;

    return construct();

    function construct() {
        if (index < 0) {
            return null;
        }

        current = arr[index];
        index--;

        if (current === null) {
            return null;
        }

        let node = new Node(current);

        node.right = construct();
        node.left = construct();

        return node;
    }
}

const postOrderArray = serializePostOrderDFS(apple);
const constructedPostOrderTree = deserializePostOrder(postOrderArray);

console.log(postOrderArray);
console.log(constructedPostOrderTree);
