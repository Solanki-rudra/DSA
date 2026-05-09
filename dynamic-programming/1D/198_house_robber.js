// Pattern: Dynamic Programming, 1D

// LeetCode Problem 198: House Robber
// You are given an array of non-negative integers representing the amount of money in each house. You are a robber who wants to maximize the amount of money you can rob. However, you cannot rob adjacent houses.
// In how many distinct ways can you rob the houses?

/**
 * @name robBrute
 * @description  Approach: Recursion
 * The idea is to use recursion to solve the problem. We create a recursive function that takes the index of the current house as input. In each recursive call, we have two choices: either rob the current house or skip the current house. If we rob the current house, we add the amount of money in the current house to the result of the recursive call with the index of the next-next house. If we skip the current house, we add the result of the recursive call with the index of the next house to the result. We return the maximum of the two choices.
 * @timeComplexity O(2^n) where n is the number of steps
 * @spaceComplexity O(1)
 */
function robBrute(nums) {
    function dfs(i) {
        if (i >= nums.length) return 0
        let robCurr = nums[i] + dfs(i + 2)
        let skipCurr = dfs(i + 1)
        return Math.max(robCurr, skipCurr)
    }
    return dfs(0)
}

/**
 * @name robOptimal
 * @description  Approach: Dynamic Programming
 * The idea is to use dynamic programming to solve the problem. We create a DP array of size n + 1, where dp[i] stores the number of distinct ways to reach the i-th step. We initialize dp[0] = 1 and dp[1] = 1. Then, we iterate from 2 to n and calculate dp[i] = dp[i - 1] + dp[i - 2].
 * @timeComplexity O(n) where n is the number of steps
 * @spaceComplexity O(1)
 */
function robOptimal(nums) {
    let prev2 = 0
    let prev = 0
    for (let n of nums) {
        let max = Math.max(prev, n + prev2)
        prev2 = prev
        prev = max
    }
    return prev
}

// Test
console.log(robBrute([1, 2, 3, 1])) // Output: 4
console.log(robBrute([2, 7, 9, 3, 1])) // Output: 12
console.log(robOptimal([1, 2, 3, 1])) // Output: 4
console.log(robOptimal([2, 7, 9, 3, 1])) // Output: 12
