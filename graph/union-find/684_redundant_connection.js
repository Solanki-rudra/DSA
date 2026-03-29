import { DSU } from "../dsu.js"

// Pattern: Graph, union-find

// LeetCode Problem 684: Redundant Connection
// In this problem, a tree is an undirected graph that is connected and has no cycles. The given input is a graph that started as a tree with N nodes (with distinct values from 1 to N), with one additional edge added. The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed. The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] with u < v, that represents an undirected edge connecting nodes u and v.

/**
 * @name findRedundantConnection
 * @description  Approach: Union-Find
 * The idea is to iterate through each edge in the edges array. For each edge, we check if the two nodes it connects are already in the same connected component. If they are, this edge is redundant. Otherwise, we union the two nodes.
 * @timeComplexity O(n * α(n)) where n is the number of nodes and α is the inverse Ackermann function
 * @spaceComplexity O(n) where n is the number of nodes
 */
function findRedundantConnection(edges) {
    let graph = new DSU()
    for (let [x, y] of edges) {
        if (!graph.union(x, y)) return [x, y]
    }
}

// Test
let edges = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]
console.log(findRedundantConnection(edges)) // Output: [1, 4]