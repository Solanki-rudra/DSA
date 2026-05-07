import { MinHeap } from "../../heap/MinHeap.js"

// Pattern: Graph, Shortest Path, Dijkstra's Algorithm

// LeetCode Problem 778: Swim in Rising Water
// You are given an n x n integer matrix grid where each cell grid[i][j] represents the elevation at that point (i, j).

// You start at the top-left corner (0, 0) and want to reach the bottom-right corner (n - 1, n - 1).
// At any time t, the sea level rises to N, and you can travel between two adjacent cells if and only if the elevation of both cells is at most t.
// You can move to four cardinal directions (up, down, left, right).
// Return the least time t such that you can reach the bottom-right corner at time t.

/**
 * @name swimInWater
 * @description  Approach: Dijkstra's Algorithm
 * We represent the n x n grid as a graph where each cell is a node.
 * Using a min-heap (priority queue), we greedily expand to the neighboring cell
 * with the lowest elevation level. The cost to reach a cell is the maximum
 * elevation seen along the path. We return `t` once we reach the bottom-right corner.
 * @timeComplexity O(N^2 log N) where N is the side length of the grid (N^2 nodes, each pushed/popped from the heap once)
 * @spaceComplexity O(N^2) for the min-heap and visited tracking
 */
function swimInWaterDij(grid) {
    let pq = new MinHeap(Infinity, (a, b) => a[0] - b[0])
    let n = grid.length
    let t = 0, dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    pq.push([grid[0][0], 0, 0])
    grid[0][0] = '#' // marked as visited
    while (!pq.isEmpty()) {
        let [level, row, col] = pq.poll()
        t = Math.max(t, level)
        if (row === n - 1 && col === n - 1) return t
        for (let [i, j] of dir) {
            let tr = row + i, tc = col + j
            if (tr >= 0 && tr < n && tc >= 0 && tc < n && grid[tr][tc] !== '#') {
                pq.push([Math.max(grid[tr][tc], level), tr, tc])
                grid[tr][tc] = '#'
            }
        }
    }
    return t
}

/**
 * @name swimInWater
 * @description  Approach: Binary Search + BFS
 * We use binary search on the possible time levels (from grid[0][0] to n*n-1).
 * For each time t, we perform a BFS to check if a path exists from the top-left
 * to the bottom-right corner where all cells on the path have elevation <= t.
 * @timeComplexity O(N^2 log N) where N is the side length of the grid (N^2 nodes, each pushed/popped from the heap once)
 * @spaceComplexity O(N^2) for the visited tracking
 */
function swimInWaterBST(grid) {
    let n = grid.length
    let low = grid[0][0], high = n * n - 1
    let dir = [[0, 1], [1, 0], [-1, 0], [0, -1]]
    while (high > low) {
        let t = Math.floor((high + low) / 2)
        let visited = Array.from({ length: n }, () => Array(n).fill(false))
        if (bfs(0, 0, t, visited)) {
            high = t
        } else {
            low = t + 1
        }
    }

    function bfs(row, col, t, visited) {
        if (row === n - 1 && col === n - 1) return true
        for (let [i, j] of dir) {
            let tr = row + i, tc = col + j
            if (tr >= 0 && tr < n && tc >= 0 && tc < n && !visited[tr][tc] && grid[tr][tc] <= t) {
                visited[tr][tc] = true
                if (bfs(tr, tc, t, visited)) return true
            }
        }
        return false
    }

    return low
}

let grid = [[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]]
let grid2 = [[3, 2, 1, 6], [2, 4, 3, 7], [5, 6, 8, 9], [4, 7, 5, 3]]

console.log(swimInWaterDij(grid)) // 16
console.log(swimInWaterBST(grid2)) // 7