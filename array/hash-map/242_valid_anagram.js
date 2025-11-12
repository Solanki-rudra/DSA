// Pattern: Array, Hash Map

// LeetCode Problem 242: Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/**
 * @name validAnagramBrute
 * @description Brute Force Approach: Check each character in s within t and remove it.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(n)
 */
function validAnagramBrute(s, t) {
    if (s.length !== t.length) return false;
    let arr = t.split('');
    for (let i = 0; i < s.length; i++) {
        let idx = arr.indexOf(s[i]);
        if (idx === -1) return false;
        arr.splice(idx, 1);
    }
    return arr.length === 0;
}

/**
 * @name validAnagramBetter
 * @description Better Approach: Sort both strings and compare.
 * @timeComplexity O(n log n)
 * @spaceComplexity O(n)
 */
function validAnagramBetter(s, t) {
    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
}

/**
 * @name validAnagramOptimal
 * @description Optimal Approach: Use a hash map to count character frequencies and compare.
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function validAnagramOptimal(s, t) {
    if (s.length !== t.length) return false;
    let count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}

// Test
const s = "anagram", t = "nagaram";
console.log(validAnagramBrute(s, t));   // true
console.log(validAnagramBetter(s, t));  // true
console.log(validAnagramOptimal(s, t)); // true
