// Pattern: Graph, traversal

// LeetCode Problem 994: Rotting Oranges
// In this problem, we are given a grid of oranges where each cell can be empty, fresh, or rotten. Every minute, all rotten oranges become adjacent fresh oranges. We need to find the minimum number of minutes until all fresh oranges become rotten.

/**
 * @name orangesRotting
 * @description  Approach: Breadth-First Search (BFS)
 * The idea is to use a breadth-first search to traverse the grid and simulate the rotting process. We maintain a queue to keep track of the positions of the rotten oranges and update the grid as fresh oranges become rotten.
 * @timeComplexity O(m * n) where m and n are the dimensions of the grid
 * @spaceComplexity O(m * n) for the queue in the worst case
 */
function orangesRotting(grid) {
    let rLen = grid.length, cLen = grid[0].length
    if (rLen === 0 || cLen == 0) return -1
    let q = []
    let oranges = 0
    let min = 0
    for (let i = 0; i < rLen; i++) {
        for (let j = 0; j < cLen; j++) {
            if (grid[i][j] === 2) {
                q.push([i, j])
            } else if (grid[i][j] === 1) oranges++
        }
    }
    if (oranges === 0) return 0
    let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
    while (q.length) {
        let size = q.length
        let infected = false
        for (let i = 0; i < size; i++) {
            let [rx, ry] = q.shift()
            for (let dir of directions) {
                let nx = rx + dir[0]
                let ny = ry + dir[1]
                if (nx >= 0 && nx < rLen && ny >= 0 && ny < cLen && grid[nx][ny] === 1) {
                    grid[nx][ny] = 2
                    oranges--
                    infected = true
                    q.push([nx, ny])
                }
            }
        }
        if (infected) min++
    }
    return oranges === 0 ? min : -1
}

let grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]

console.log(orangesRotting(grid)) // Output: 4