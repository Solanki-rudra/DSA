// Pattern: String, Sliding Window

// LeetCode Problem 567: Permutation in String
// Given two strings s1 and s2, return true if s2 contains a permutation of s1.
// (i.e., any permutation of s1 must appear as a substring of s2)


/**
 * @name checkInclusionBrute
 * @description Brute Force Approach: Sort s1 and every substring of same length in s2.
 * @timeComplexity O(n * k log k)   // n = |s2|, k = |s1|
 * @spaceComplexity O(k)
 */
function checkInclusionBrute(s1, s2) {
    let sorted_s1 = s1.split("").sort().join("");
    let start = 0;
    let end = sorted_s1.length - 1;

    while (s2[end]) {
        let str = s2.slice(start, end + 1).split("").sort().join("");
        if (str === sorted_s1) return true;
        start++;
        end++;
    }
    return false;
}


/**
 * @name checkInclusionOptimal
 * @description Optimal Approach: Match two hashmaps using Sliding Window.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function checkInclusionOptimal(s1, s2) {
    if (s1.length > s2.length) return false;

    let s1_hash = Array(26).fill(0);
    let s2_hash = Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1_hash[s1[i].charCodeAt(0) - 97]++;
        s2_hash[s2[i].charCodeAt(0) - 97]++;
    }

    for (let i = s1.length; i < s2.length; i++) {
        if (isEqual(s1_hash, s2_hash)) return true;

        s2_hash[s2[i - s1.length].charCodeAt(0) - 97]--;
        s2_hash[s2[i].charCodeAt(0) - 97]++;
    }

    function isEqual(a, b) {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    return isEqual(s1_hash, s2_hash);
}


// Test
let s1 = "ab", s2 = "eidbaooo";
console.log(checkInclusionBrute(s1, s2));      // true
console.log(checkInclusionOptimal(s1, s2));    // true