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

/**
 * @name countSubstringsBetter
 * @description Better Approach: Generate substrings and check for palindrome on the fly.
 * @timeComplexity O(n^3)
 * @spaceComplexity O(n)
 */
function countSubstringsBetter(s) {
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        let str = ""
        for (let j = i; j < s.length; j++) {
            str += s[j]
            let l = 0, r = str.length - 1;
            let isPali = true
            while (l <= r) {
                if (str[l] == str[r]) {
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
    }
    return ans
}

/**
 * @name countSubstringsOptimal
 * @description Optimal Approach: Expand around centers.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(1)
 */
function countSubstringsOptimal(s) {
    let ans = 0
    function counter(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            ans++
            l--
            r++
        }
    }
    for (let i = 0; i < s.length; i++) {
        counter(i, i)
        counter(i, i + 1)
    }
    return ans
}

let s = "abc"
console.log(countSubstringsBrute(s)) // Output: 3
console.log(countSubstringsBetter(s)) // Output: 3
console.log(countSubstringsOptimal(s)) // Output: 3