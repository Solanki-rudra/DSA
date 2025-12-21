// Pattern: String, Sliding Window
// LeetCode Problem 3: Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.

/**
 * @name lengthOfLongestSubstringBrute
 * @description Brute Force Approach:
 * Check every substring and stop expanding when a duplicate character is found.
 * @timeComplexity O(n^3)
 * @spaceComplexity O(1)
 */
function lengthOfLongestSubstringBrute(s) {
    let result = 0

    for (let i = 0; i < s.length; i++) {
        let substr = ""

        for (let j = i; j < s.length; j++) {
            let isContain = false

            for (let k = 0; k < substr.length; k++) {
                if (substr[k] === s[j]) {
                    isContain = true
                    break
                }
            }

            if (isContain) break

            substr += s[j]
            result = Math.max(result, substr.length)
        }
    }

    return result
}


/**
 * @name lengthOfLongestSubstringOptimal
 * @description Optimal Sliding Window Approach:
 * Expand the window and shrink it when a duplicate character appears.
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function lengthOfLongestSubstringOptimal(s) {
    let result = 0
    let left = 0
    let hashMap = {}

    for (let right = 0; right < s.length; right++) {
        hashMap[s[right]] = (hashMap[s[right]] || 0) + 1

        while (hashMap[s[right]] > 1) {
            hashMap[s[left]]--
            left++
        }

        result = Math.max(result, right - left + 1)
    }

    return result
}


// Test
let s = "abcabcbb"
console.log(lengthOfLongestSubstringBrute(s))    // 3
console.log(lengthOfLongestSubstringOptimal(s))  // 3