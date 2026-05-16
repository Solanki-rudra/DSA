// Pattern: Dynamic Programming, 1D

// LeetCode Problem 91: Decode Ways
// A message containing letters from A-Z can be encoded into numbers using the following mapping:
// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a string s containing only digits, return the number of ways to decode it.

/**
 * @name numDecodings1
 * @description  Approach: Recursion
 * The idea is to use recursion to solve the problem. We create a recursive function that takes the index of the current house as input. In each recursive call, we have two choices: either rob the current house or skip the current house. If we rob the current house, we add the amount of money in the current house to the result of the recursive call with the index of the next-next house. If we skip the current house, we add the result of the recursive call with the index of the next house to the result. We return the maximum of the two choices.
 * @timeComplexity O(2^n) where n is the number of steps
 * @spaceComplexity O(n) for the recursion stack
 */
function numDecodings1(s) {
    let n = s.length
    function recurse(i) {
        if (i >= n) return 1
        let single = 0
        if (s[i] !== '0') single = recurse(i + 1)
        let double = 0
        if (i < n - 1 && s[i] !== '0' && Number(s.substring(i, i + 2)) <= 26) double = recurse(i + 2)
        return single + double
    }
    return recurse(0)
}

/**
 * @name numDecodings2
 * @description  Approach: Dynamic Programming
 * The idea is to use dynamic programming to solve the problem. We create a DP array of size n + 1, where dp[i] stores the number of distinct ways to reach the i-th step. We initialize dp[0] = 1 and dp[1] = 1. Then, we iterate from 2 to n and calculate dp[i] = dp[i - 1] + dp[i - 2].
 * @timeComplexity O(n) where n is the number of steps
 * @spaceComplexity O(n) for the memoization map + O(n) for the recursion stack
 */
function numDecodings2(s) {
    let n = s.length
    let dp = new Map()
    function recurse(i) {
        if (dp.has(i)) return dp.get(i)
        if (i >= n) return 1
        let single = 0
        if (s[i] !== '0') single = recurse(i + 1)
        let double = 0
        if (i < n - 1 && s[i] !== '0' && Number(s.substring(i, i + 2)) <= 26) double = recurse(i + 2)
        dp.set(i, single + double)
        return single + double
    }
    return recurse(0)
}

/**
 * @name numDecodings3
 * @description  Approach: Dynamic Programming
 * The idea is to use dynamic programming to solve the problem. We create a DP array of size n + 1, where dp[i] stores the number of distinct ways to reach the i-th step. We initialize dp[0] = 1 and dp[1] = 1. Then, we iterate from 2 to n and calculate dp[i] = dp[i - 1] + dp[i - 2].
 * @timeComplexity O(n) where n is the number of steps
 * @spaceComplexity O(n) for the DP array
 */
function numDecodings3(s) {
    let n = s.length
    let dp = Array(n + 1).fill(0)
    dp[0] = 1, dp[1] = s[0] === '0' ? 0 : 1
    for (let i = 2; i <= n; i++) {
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1]
        }
        let twoDigits = Number(s.substring(i - 2, i))
        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2]
        }
    }
    return dp[n]
}

/**
 * @name numDecodings4
 * @description  Approach: Dynamic Programming
 * The idea is to use dynamic programming to solve the problem. We create a DP array of size n + 1, where dp[i] stores the number of distinct ways to reach the i-th step. We initialize dp[0] = 1 and dp[1] = 1. Then, we iterate from 2 to n and calculate dp[i] = dp[i - 1] + dp[i - 2].
 * @timeComplexity O(n) where n is the number of steps
 * @spaceComplexity O(1) for the DP array
 */
function numDecodings4(s) {
    let n = s.length
    let prev2 = 1, prev = s[0] === '0' ? 0 : 1
    for (let i = 2; i <= n; i++) {
        let curr = 0
        if (s[i - 1] !== '0') {
            curr += prev
        }
        let twoDigits = Number(s.substring(i - 2, i))
        if (twoDigits >= 10 && twoDigits <= 26) {
            curr += prev2
        }
        prev2 = prev
        prev = curr
    }
    return prev
}

// Test
console.log(numDecodings1("12")) // Output: 2
console.log(numDecodings2("12")) // Output: 2
console.log(numDecodings3("12")) // Output: 2
console.log(numDecodings4("12")) // Output: 2

console.log(numDecodings1("226")) // Output: 3
console.log(numDecodings2("226")) // Output: 3
console.log(numDecodings3("226")) // Output: 3
console.log(numDecodings4("226")) // Output: 3

console.log(numDecodings1("06")) // Output: 0
console.log(numDecodings2("06")) // Output: 0
console.log(numDecodings3("06")) // Output: 0
console.log(numDecodings4("06")) // Output: 0
