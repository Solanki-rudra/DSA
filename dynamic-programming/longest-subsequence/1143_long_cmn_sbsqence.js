// Pattern: Dynamic Programming, Longest subsequence

/**
 * LeetCode #1143 - Longest Common Subsequence
 *
 * Given two strings text1 and text2, return the length of their longest common subsequence.
 * If there is no common subsequence, return 0.
 */

/**
 * Approach 1: Recursive (Brute Force)
 *
 * Time Complexity: O(2^(m+n)) - In the worst case, we explore two branches at each step.
 * Space Complexity: O(m+n) - Max depth of the recursion stack.
 *
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence1(text1, text2) {
    function rec(i, j) {
        if (i < 0 || j < 0) return 0
        if (text1[i] === text2[j]) return 1 + rec(i - 1, j - 1)
        else {
            return Math.max(rec(i - 1, j), rec(i, j - 1))
        }
    }
    return rec(text1.length - 1, text2.length - 1)
}

/**
 * Approach 2: Recursion with Memoization (Top-Down DP)
 *
 * Time Complexity: O(m * n) - We compute each state at most once.
 * Space Complexity: O(m * n) - We use a 2D array for memoization and call stack.
 *
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence2(text1, text2) {
    let n1 = text1.length, n2 = text2.length
    let dp = Array.from({ length: n1 }, () => Array(n2).fill(-1))
    function rec(i, j) {
        if (i < 0 || j < 0) return 0
        if (dp[i][j] !== -1) return dp[i][j]
        if (text1[i] === text2[j]) {
            dp[i][j] = 1 + rec(i - 1, j - 1)
        } else {
            dp[i][j] = Math.max(rec(i - 1, j), rec(i, j - 1))
        }
        return dp[i][j]
    }
    return rec(text1.length - 1, text2.length - 1)
}

/**
 * Approach 3: 2D Dynamic Programming (Bottom-Up)
 *
 * Time Complexity: O(m * n) - We fill an m x n matrix.
 * Space Complexity: O(m * n) - We use a 2D array of size (m+1) x (n+1).
 *
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence3(text1, text2) {
    let n1 = text1.length, n2 = text2.length
    let dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(-1))
    for (let i = 0; i <= n1; i++) dp[i][0] = 0
    for (let j = 0; j <= n2; j++) dp[0][j] = 0
    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            if (text1[i - 1] === text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1]
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
        }
    }
    return dp[n1][n2]
}

/**
 * Approach 4: 1D Dynamic Programming (Space Optimized)
 *
 * Time Complexity: O(m * n) - We iterate through the strings.
 * Space Complexity: O(n) - We only store the previous row of the DP matrix.
 *
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence4(text1, text2) {
    let n2 = text2.length;
    let dp = Array(n2 + 1).fill(0);
    for (let i = 1; i <= text1.length; i++) {
        let diag = 0;
        for (let j = 1; j <= n2; j++) {
            let temp = dp[j];
            if (text1[i - 1] === text2[j - 1]) {
                dp[j] = 1 + diag;
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1]);
            }
            diag = temp;
        }
    }
    return dp[n2];
}

// Test 
const testCases = [
    { text1: "abcde", text2: "ace", expected: 3 },
    { text1: "abc", text2: "abc", expected: 3 },
    { text1: "abc", text2: "def", expected: 0 },
];

for (const { text1, text2, expected } of testCases) {
    console.log(`text1: "${text1}", text2: "${text2}", Expected: ${expected}, Actual: ${longestCommonSubsequence4(text1, text2)}`);
}
