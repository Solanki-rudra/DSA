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
function swimInWater(grid) {
    let pq = new MinHeap((a, b) => a[0] - b[0])
    let n = grid.length
    let t = 0, dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    pq.push([grid[0][0], 0, 0])
    grid[0][0] = '#' // marked as visited
    while (!pq.isEmpty()) {
        let [level, row, col] = pq.pull()
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

let grid = [[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]]

console.log(swimInWater(grid))