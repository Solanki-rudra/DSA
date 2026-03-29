// Pattern: Graph, traversal

// LeetCode Problem 130: Surrounded Regions
// In this problem, we are given a 2D board containing 'X' and 'O'. We need to capture all regions that are surrounded by 'X'.

/**
 * @name solve
 * @description  Approach: Depth-First Search (DFS)
 * The idea is to use a depth-first search to traverse the board and identify all regions of 'O' that are not connected to the border. These regions are then converted to 'X'.
 * @timeComplexity O(m * n) where m and n are the dimensions of the board
 * @spaceComplexity O(m * n) for the visited matrix and the recursion stack in the worst case
 */
function solve(board) {
    let m = board.length, n = board[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                if (board[i][j] === 'O') dfs(i, j)
            }
        }
    }
    function dfs(i, j) {
        if (i < m && i >= 0 && j < n && j >= 0 && board[i][j] === 'O') {
            board[i][j] = 'T'
            dfs(i + 1, j)
            dfs(i - 1, j)
            dfs(i, j - 1)
            dfs(i, j + 1)
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') board[i][j] = 'X'
            else if (board[i][j] === 'T') board[i][j] = 'O'
        }
    }
    return board
}

let board = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]]

console.log(solve(board))