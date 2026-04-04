// Pattern: Graph, traversal

// LeetCode Problem 417: Pacific Atlantic Water Flow
// In this problem, we are given a 2D grid of heights where each cell represents the height of the terrain. We need to find all cells from which water can flow to both the Pacific and Atlantic oceans.

/**
 * @name pacificAtlanticBFS
 * @description  Approach: Breadth-First Search (BFS)
 * The idea is to use a breadth-first search to traverse the grid and simulate the water flow process. We maintain a queue to keep track of the positions of the cells and update the grid as water flows from higher to lower elevations.
 * @timeComplexity O(m * n) where m and n are the dimensions of the grid
 * @spaceComplexity O(m * n) for the queue in the worst case
 */
function pacificAtlanticBFS(heights) {
    let m = heights.length, n = heights[0].length
    let visited = Array.from({ length: m }, () => Array(n).fill(0))
    let pacificQ = []
    let atlanticQ = []

    for (let i = 0; i < m; i++) {
        pacificQ.push([i, 0])
        atlanticQ.push([i, n - 1])
    }
    for (let j = 0; j < n; j++) {
        pacificQ.push([0, j])
        atlanticQ.push([m - 1, j])
    }

    function bfs(queue, flag) {
        while (queue.length) {
            let [row, col] = queue.shift()
            if (visited[row][col] === flag || visited[row][col] === 3) continue
            visited[row][col] = visited[row][col] === 0 ? flag : 3
            let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
            for (let [dr, dc] of directions) {
                let tr = row + dr, tc = col + dc
                if (tr >= 0 && tr < m && tc >= 0 && tc < n && heights[tr][tc] >= heights[row][col]) {
                    queue.push([tr, tc])
                }
            }
        }
    }

    bfs(pacificQ, 1)
    bfs(atlanticQ, 2)

    let result = []

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (visited[row][col] === 3) result.push([row, col])
        }
    }

    return result
}

/**
 * @name pacificAtlanticDFS
 * @description  Approach: Depth-First Search (DFS)
 * The idea is to use a depth-first search to traverse the grid and simulate the water flow process. We maintain a stack to keep track of the positions of the cells and update the grid as water flows from higher to lower elevations.
 * @timeComplexity O(m * n) where m and n are the dimensions of the grid
 * @spaceComplexity O(m * n) for the queue in the worst case
 */
function pacificAtlanticDFS(heights) {
    let m = heights.length, n = heights[0].length
    let ocean = Array.from({ length: m }, () => Array(n).fill(0))

    for (let i = 0; i < m; i++) {
        dfs(i, 0, 1, heights[i][0])
    }
    for (let j = 0; j < n; j++) {
        dfs(0, j, 1, heights[0][j])
    }

    for (let i = 0; i < m; i++) {
        dfs(i, n - 1, 2, heights[i][n - 1])
    }
    for (let j = 0; j < n; j++) {
        dfs(m - 1, j, 2, heights[m - 1][j])
    }

    function dfs(row, col, oceanFlag, preHeight) {
        if (row < 0 || row >= m || col < 0 || col >= n || ocean[row][col] === oceanFlag || ocean[row][col] === 3 || heights[row][col] < preHeight) return
        ocean[row][col] = ocean[row][col] === 0 ? oceanFlag : 3
        dfs(row + 1, col, oceanFlag, heights[row][col])
        dfs(row - 1, col, oceanFlag, heights[row][col])
        dfs(row, col + 1, oceanFlag, heights[row][col])
        dfs(row, col - 1, oceanFlag, heights[row][col])
    }

    let result = []

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (ocean[row][col] === 3) result.push([row, col])
        }
    }

    return result
}

let heights = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]

console.log(pacificAtlanticBFS(heights)) // Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
console.log(pacificAtlanticDFS(heights)) // Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]