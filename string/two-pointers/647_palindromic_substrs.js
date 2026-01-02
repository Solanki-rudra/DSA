// Pattern: String, Two Pointers
// LeetCode Problem 647: Palindromic Substrings
// Given a string, return the number of palindromic substrings in it.

/**
 * @name countSubstringsBrute
 * @description Brute Force Approach: Generate all substrings and check each one for palindrome.
 * @timeComplexity O(n^3)
 * @spaceComplexity O(n^3)
 */
function countSubstringsBrute(s) {
    let subStrs = []
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        let str = s[i]
        subStrs.push(str)
        for (let j = i + 1; j < s.length; j++) {
            str += s[j]
            subStrs.push(str)
        }
    }
    for (let k = 0; k < subStrs.length; k++) {
        let str = subStrs[k]
        let l = 0, r = str.length - 1
        let isPali = true
        while (l <= r) {
            if (str[l] === str[r]) {
                l++
                r--
            } else {
                isPali = false
                break
            }
        }
        if (isPali) {
            ans++
        }
    }
    return ans
}

let s = "abc"
console.log(countSubstringsBrute(s)) // Output: 3