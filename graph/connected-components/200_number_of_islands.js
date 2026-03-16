// Pattern: Graph, Connected Components

// LeetCode Problem 200: Number of Islands
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

/**
 * @name numIslands
 * @description  Approach: Depth-First Search (DFS)
 * The idea is to iterate through each cell in the grid. When we encounter a '1', it means we've found an island. We then perform a DFS to mark all connected '1's as '0's (indicating that they have been visited). This way, we ensure that we only count each island once. We increment our island count each time we start a new DFS.
 * @timeComplexity O(m * n) where m is the number of rows and n is the number of columns
 * @spaceComplexity O(m * n) where m is the number of rows and n is the number of columns
 */
function numIslands(grid) {
    let rowLen = grid.length, colLen = grid[0].length
    let islands = 0

    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (grid[row][col] === '1') {
                dfs(row, col)
                islands++
            }
        }
    }

    function dfs(row, col) {
        if (row >= rowLen || row < 0 || col >= colLen || col < 0 || grid[row][col] === '0') return
        grid[row][col] = '0'
        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }

    return islands
}

// Test
let grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
console.log(numIslands(grid)) // Output: 3