// Pattern: String, Two Pointers
// LeetCode Problem 125: Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

/**
 * @name isPalindromeBrute
 * @description Brute Force Approach:
 * Clean the string by removing non-alphanumeric characters,
 * reverse it, and compare both strings.
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function isPalindromeBrute(s) {
    let cleanS = ""
    for (let ch of s) {
        if (isAlphaNumeric(ch)) {
            cleanS += ch.toLowerCase()
        }
    }

    let rev = ""
    for (let i = cleanS.length - 1; i >= 0; i--) {
        rev += cleanS[i]
    }
    return cleanS === rev
}

/**
 * @name isPalindromeOptimal
 * @description Optimal Two Pointers Approach:
 * Use two pointers from both ends, skip non-alphanumeric characters,
 * and compare characters case-insensitively.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function isPalindromeOptimal(s) {
    let l = 0, r = s.length - 1
    while (l < r) {
        if (!isLetterOrDigit(s[l])) {
            l++
            continue
        }
        if (!isLetterOrDigit(s[r])) {
            r--
            continue
        }
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        }
        l++
        r--
    }
    return true
}

function isAlphaNumeric(ch) {
    return /[a-zA-Z0-9]/.test(ch)
}

// Test
let s = "A man, a plan, a canal: Panama"
console.log(isPalindromeBrute(s))    // true
console.log(isPalindromeOptimal(s))  // true