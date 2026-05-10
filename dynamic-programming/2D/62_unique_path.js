// Pattern: Dynamic Programming, 2D

// LeetCode Problem 62: Unique Paths
// A robot is located at the top-left corner of a m x n grid. 
// The robot can only move either down or right at any point in time.
// The robot is trying to reach the bottom - right corner of the grid.
// How many possible unique paths are there?

/**
 * @name uniquePathsBrute
 * @description  Approach: Recursion
 * The idea is to use recursion to solve the problem. We start at the top-left cell and recursively explore two valid moves: right and down. We return 1 when we reach the bottom-right cell, and 0 if we go out of bounds. The total paths are the sum of paths from both moves.
 * @timeComplexity O(2^(m + n)) where m is the number of rows and n is the number of columns
 * @spaceComplexity O(m + n) where m is the number of rows and n is the number of columns (due to call stack depth)
 */
function uniquePathsBrute(m, n) {
    let paths = 0
    function dfs(i, j) {
        if (i >= m || j >= n) return 0
        if (i === m - 1 && j === n - 1) return 1
        return dfs(i + 1, j) + dfs(i, j + 1)
    }
    return dfs(0, 0)
}

/**
 * @name uniquePathsOptimal
 * @description  Approach: Dynamic Programming
 * The idea is to use dynamic programming to solve the problem. We create a 2D DP array where dp[i][j] stores the number of distinct ways to reach the i-th row and j-th column. 
 * We initialize the first row and first column with 1s, since there's only one way to reach any cell in the first row or column. 
 * Then, we iterate from (1, 1) to (m-1, n-1) and calculate dp[i][j] = dp[i - 1][j] + dp[i][j - 1].
 * @timeComplexity O(m * n) where m is the number of rows and n is the number of columns
 * @spaceComplexity O(m * n) where m is the number of rows and n is the number of columns
 */
function uniquePathsOptimal(m, n) {
    let dp = Array.from({ length: m }, () => Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
}

// Test
console.log(uniquePathsBrute(2, 2)) // Output: 2
console.log(uniquePathsOptimal(2, 2)) // Output: 2
console.log(uniquePathsBrute(3, 3)) // Output: 6
console.log(uniquePathsOptimal(3, 3)) // Output: 6
console.log(uniquePathsBrute(3, 7)) // Output: 28
console.log(uniquePathsOptimal(3, 7)) // Output: 28