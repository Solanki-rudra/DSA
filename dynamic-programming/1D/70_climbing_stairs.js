// Pattern: Dynamic Programming, 1D

// LeetCode Problem 70: Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?

/**
 * @name climbStairs
 * @description  Approach: Dynamic Programming
 * The idea is to use dynamic programming to solve the problem. We create a DP array of size n + 1, where dp[i] stores the number of distinct ways to reach the i-th step. We initialize dp[0] = 1 and dp[1] = 1. Then, we iterate from 2 to n and calculate dp[i] = dp[i - 1] + dp[i - 2].
 * @timeComplexity O(n) where n is the number of steps
 * @spaceComplexity O(1)
 */
function climbStairs(n) {
    if (n === 0) return 1
    if (n === 1) return 1
    let prev2 = 1, prev1 = 1
    for (let i = 2; i <= n; i++) {
        let current = prev2 + prev1
        prev2 = prev1
        prev1 = current
    }
    return prev1
}

// Test
console.log(climbStairs(2)) // Output: 2
console.log(climbStairs(3)) // Output: 3
console.log(climbStairs(4)) // Output: 5
console.log(climbStairs(5)) // Output: 8