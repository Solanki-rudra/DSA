// Pattern: Graph, Connected Components

// LeetCode Problem 695: Max Area of Island
// Given a 2d grid map of '1's (land) and '0's (water), find the maximum area of an island. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

/**
 * @name maxAreaOfIsland
 * @description  Approach: Depth-First Search (DFS)
 * The idea is to iterate through each cell in the grid. When we encounter a '1', we will perform a depth-first search (DFS) to explore the entire island and calculate its area. We will mark the visited land cells as '0' to avoid counting them again. We will keep track of the maximum area found during the process.
 * @timeComplexity O(m * n) where m is the number of rows and n is the number of columns
 * @spaceComplexity O(m * n) where m is the number of rows and n is the number of columns
 */
function maxAreaOfIsland(grid) {
    let rowLen = grid.length, colLen = grid[0].length
    let max = 0
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (grid[row][col] === 1) {
                let area = dfs(row, col)
                max = Math.max(max, area)
            }
        }
    }

    function dfs(row, col) {
        if (row < 0 || row >= rowLen || col < 0 || col >= colLen || grid[row][col] === 0) return 0
        grid[row][col] = 0

        let area = 1

        area += dfs(row, col - 1)
        area += dfs(row, col + 1)
        area += dfs(row - 1, col)
        area += dfs(row + 1, col)

        return area
    }

    return max
}

// Test
let grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
console.log(maxAreaOfIsland(grid)) // Output: 6