// Pattern: Graph, Connected Components

// LeetCode Problem 547: Number of Provinces
// There are n cities connected by some number of flights. You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
// Return the number of provinces.

/**
 * @name findCircleNum
 * @description  Approach: Depth-First Search (DFS)
 * We can model the cities as a graph where each node represents a city, and edges connect directly connected cities. We will use DFS to explore each connected component (province) and count the number of such components.
 * @timeComplexity O(N^2) where N is the number of cities
 * @spaceComplexity O(N) where N is the number of cities
 */
function findCircleNum(isConnected) {
    let n = isConnected.length
    let visited = new Array(n).fill(false)
    let provinces = 0

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i, isConnected, visited)
            provinces++
        }
    }

    return provinces
}

function dfs(node, isConnected, visited) {
    visited[node] = true
    for (let i = 0; i < isConnected[node].length; i++) {
        if (isConnected[node][i] === 1 && !visited[i]) {
            dfs(i, isConnected, visited)
        }
    }
}

// Test

console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]])) // Output: 2