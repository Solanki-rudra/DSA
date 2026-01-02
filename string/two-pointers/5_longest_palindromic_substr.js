// Pattern: String, Two Pointers
// LeetCode Problem 5: Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

/**
 * @name longestPalindromeBrute
 * @description Brute Force Approach: Generate all substrings and check each one for palindrome.
 * @timeComplexity O(n^3)
 * @spaceComplexity O(1)
 */
function longestPalindromeBrute(s) {
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        let str = ""
        for (let j = i; j < s.length; j++) {
            str += s[j]
            let l = 0, r = str.length - 1;
            let found = true
            while (l <= r) {
                if (str[l] === str[r]) {
                    l++
                    r--
                } else {
                    found = false
                    break
                }
            }
            if (found) {
                if (ans.length < str.length) ans = str
            }
        }
    }
    return ans
}

/**
 * @name longestPalindromeOptimal
 * @description Optimal Approach: Expand around centers.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(1)
 */
function longestPalindromeOptimal(s) {
    let ans = "";
    function helper(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (ans.length < r - l + 1) ans = s.slice(l, r + 1)
            l--
            r++
        }
    }
    for (let i = 0; i < s.length; i++) {
        helper(i, i)
        helper(i, i + 1)
    }
    return ans
}

let s = "babad"
console.log(longestPalindromeBrute(s)) // Output: "bab"
console.log(longestPalindromeOptimal(s)) // Output: "bab"