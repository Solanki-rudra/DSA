// Pattern: String, Simulation

// LeetCode Problem 14: Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

/**
* @name longestCommonPrefix
* @description Approach: Compare characters of the first string with each subsequent string, updating the prefix accordingly.
* @timeComplexity O(n * m)
* @spaceComplexity O(1)
*/
function longestCommonPrefix(strs) {
    if (strs.length == 0) return ""
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let temp = ""
        for (let j = 0; j < prefix.length; j++) {
            if (prefix[j] == strs[i][j]) {
                temp += prefix[j]
            } else {
                break
            }
        }
        prefix = temp
    }
    return prefix
}

// Test
const strs = ["flower", "flow", "flight"]; // "fl"
console.log(longestCommonPrefix(strs));