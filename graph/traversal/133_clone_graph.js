// Pattern: Graph, traversal

// LeetCode Problem 133: Clone Graph
// In this problem, we are given a reference to a node in a connected undirected graph. We need to return a deep copy (clone) of the graph.

/**
 * @name cloneGraph
 * @description  Approach: Depth-First Search (DFS)
 * The idea is to use a depth-first search to traverse the graph and create a copy of each node. We maintain a map to keep track of the nodes that have already been copied to avoid infinite loops caused by cycles in the graph.
 * @timeComplexity O(n) where n is the number of nodes in the graph
 * @spaceComplexity O(n) for the visited map and the recursion stack in the worst case
 */
function cloneGraph(node) {
     let visited = new Map()
    function dfs(node) {
        if (!node) return node
        let hasNode = visited.get(node)
        if (hasNode) return hasNode
        let newNode = new _Node(node.val)
        visited.set(node, newNode)
        for (let neighbor of node.neighbors) {
            newNode.neighbors.push(dfs(neighbor))
        }
        return newNode
    }
    return dfs(node)
}

function _Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};


// --- TEST ---
// Helper to build a graph from adjacency list
function buildGraph(adjList) {
    if (!adjList.length) return null;
    const nodes = adjList.map((_, i) => new _Node(i + 1));
    for (let i = 0; i < adjList.length; i++) {
        nodes[i].neighbors = adjList[i].map(j => nodes[j - 1]);
    }
    return nodes[0];
}

// Example: [[2,4],[1,3],[2,4],[1,3]]
const adjList = [[2,4],[1,3],[2,4],[1,3]];
const inputNode = buildGraph(adjList);
const cloned = cloneGraph(inputNode);
console.log(cloned) // Output: Cloned graph with the same structure as the input graph