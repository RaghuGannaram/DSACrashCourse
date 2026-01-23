/*

a---b---g---|
|   |       |
|   h       |
|   |       |
c---d---e   |
    |       |
    f-------i



*/

const unWeightedUndirectedGraph = {
    a: ["b", "c"],
    b: ["a", "g", "h"],
    c: ["a", "d"],
    d: ["c", "e", "f", "h"],
    e: ["d"],
    f: ["d", "i"],
    g: ["b", "i"],
    h: ["b", "d"],
    i: ["f", "g"],
};

function dfsTraversal(graph, node) {
    let current,
        stack = [],
        visited = new Set();

    stack.push(node);

    while (stack.length > 0) {
        current = stack.pop();
        visited.add(current);

        for (let next of graph[current]) {
            if (!visited.has(next)) stack.push(next);
        }
    }

    return Array.from(visited);
}

function bfsTraversal(graph, node) {
    let current,
        queue = [],
        visited = new Set();

    queue.push(node);

    while (queue.length > 0) {
        current = queue.shift();

        visited.add(current);

        for (let next of graph[current]) {
            if (!visited.has(next)) queue.push(next);
        }
    }

    return Array.from(visited);
}

console.log(dfsTraversal(unWeightedUndirectedGraph, "a"));
console.log(bfsTraversal(unWeightedUndirectedGraph, "a"));
