// Pattern: Array, Hash Map (also Sliding Window)

// LeetCode Problem 219: Contains Duplicate II
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j 
// in the array such that nums[i] == nums[j] and abs(i - j) <= k.

/**
 * @name containsDuplicate2Brute
 * @description Brute Force Approach: Check all pairs within distance k to find duplicates.
 * @timeComplexity O(n * k)
 * @spaceComplexity O(1)
 */
function containsDuplicate2Brute(nums, k) {
    if (nums.length < 2 || k < 1) return false;
    for (let i = 0; i < nums.length; i++) {
        // ensure j doesn’t exceed array bounds
        for (let j = i + 1; j < nums.length && j <= i + k; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
}

/**
 * @name containsDuplicate2Better
 * @description Better Approach: Sort the array with original indices, then check adjacent duplicates within k distance.
 * @timeComplexity O(n log n)
 * @spaceComplexity O(n)
 */
function containsDuplicate2Better(nums, k) {
    if (nums.length < 2 || k < 1) return false;
    const sorted = nums.map((val, idx) => [val, idx]).sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i][0] === sorted[i + 1][0] && Math.abs(sorted[i][1] - sorted[i + 1][1]) <= k) {
            return true;
        }
    }
    return false;
}

/**
 * @name containsDuplicate2Optimal
 * @description Optimal Approach: Use a sliding window (Set) to track last k elements and check for duplicates.
 * @timeComplexity O(n)
 * @spaceComplexity O(k)
 */
function containsDuplicate2Optimal(nums, k) {
    if (nums.length < 2 || k < 1) return false;
    const window = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (window.has(nums[i])) return true;
        window.add(nums[i]);
        if (window.size > k) {
            window.delete(nums[i - k]);
        }
    }
    return false;
}

// Test
const nums = [1, 2, 3, 1], k = 3;
console.log(containsDuplicate2Brute(nums, k));   // true
console.log(containsDuplicate2Better(nums, k));  // true
console.log(containsDuplicate2Optimal(nums, k)); // true
