// Pattern: Dynamic Programming, 1D

// LeetCode Problem 213: House Robber II
// You are given an array of non-negative integers representing the amount of money in each house. You are a robber who wants to maximize the amount of money you can rob. However, you cannot rob adjacent houses.
// The houses are arranged in a circle, meaning the first and last houses are also adjacent.


/**
 * @name robBrute
 * @description  Approach: Recursion
 * The idea is to use recursion to solve the problem. We create a recursive function that takes the index of the current house as input. In each recursive call, we have two choices: either rob the current house or skip the current house. If we rob the current house, we add the amount of money in the current house to the result of the recursive call with the index of the next-next house. If we skip the current house, we add the result of the recursive call with the index of the next house to the result. We return the maximum of the two choices.
 * @timeComplexity O(2^n) where n is the number of steps
 * @spaceComplexity O(1)
 */
function robBrute(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let n = nums.length
    function dfs(i, end) {
        if (i >= end) return 0
        let robCurr = nums[i] + dfs(i + 2, end)
        let skipCurr = dfs(i + 1, end)
        return Math.max(robCurr, skipCurr)
    }
    return Math.max(dfs(0, n - 1), dfs(1, n))
}

/**
 * @name robOptimal
 * @description  Approach: Dynamic Programming
 * The idea is to use dynamic programming to solve the problem. We create a DP array of size n + 1, where dp[i] stores the number of distinct ways to reach the i-th step. We initialize dp[0] = 1 and dp[1] = 1. Then, we iterate from 2 to n and calculate dp[i] = dp[i - 1] + dp[i - 2].
 * @timeComplexity O(n) where n is the number of steps
 * @spaceComplexity O(1)
 */
function robOptimal(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let n = nums.length
    let prev2 = 0, prev = 0, max1 = 0, max2 = 0
    for (let i = 0; i < n - 1; i++) {
        max1 = Math.max(prev, prev2 + nums[i])
        prev2 = prev
        prev = max1
    }
    prev = 0, prev2 = 0
    for (let i = 1; i < n; i++) {
        max2 = Math.max(prev, prev2 + nums[i])
        prev2 = prev
        prev = max2
    }
    return Math.max(max1, max2)
}

// Test
console.log(robBrute([2, 7, 9, 3, 1])) // Output: 11
console.log(robBrute([1, 2, 3, 1])) // Output: 4
console.log(robBrute([1])) // Output: 1
console.log(robOptimal([2, 7, 9, 3, 1])) // Output: 11
console.log(robOptimal([1, 2, 3, 1])) // Output: 4
console.log(robOptimal([1])) // Output: 1
