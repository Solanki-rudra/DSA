// Pattern: Array, Cyclic Sort

// LeetCode Problem 41: First Missing Positive
// Given an unsorted integer array nums, return the smallest positive integer missing from nums.
// You must solve it in O(n) time and O(1) extra space.

/**
 * @name firstMissingPositiveBrute
 * @description Brute Force: For each number starting from 1, scan the array to check if it exists.
 * @timeComplexity O(n²)
 * @spaceComplexity O(1)
 */
function firstMissingPositiveBrute(nums) {
    let result = 1;
    while (true) {
        let isInclude = false;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === result) {
                isInclude = true;
                break;
            }
        }
        if (isInclude) result++;
        else break;
    }
    return result;
}

/**
 * @name firstMissingPositiveBetter
 * @description Better: Sort the array first, then linearly find the first missing positive.
 * @timeComplexity O(n log n)
 * @spaceComplexity O(1)   // Sorting done in-place
 */
function firstMissingPositiveBetter(nums) {
    nums.sort((a, b) => a - b);
    let result = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === result) result++;
    }
    return result;
}

/**
 * @name firstMissingPositiveBest
 * @description Best but not optimal space: Use a hash map to record which values exist.
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function firstMissingPositiveBest(nums) {
    let numsMap = {};
    for (let i = 0; i < nums.length; i++) {
        numsMap[nums[i]] = true;
    }
    for (let i = 1; i <= nums.length + 1; i++) {
        if (!numsMap[i]) return i;
    }
}

/**
 * @name firstMissingPositiveOptimal
 * @description Optimal: Cyclic sort / Index marking — use array positions to track presence.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function firstMissingPositiveOptimal(nums) {
    if (!nums.includes(1)) return 1;

    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] < 1 || nums[i] > n) nums[i] = 1;
    }

    for (let i = 0; i < n; i++) {
        let a = Math.abs(nums[i]);
        if (a === n) nums[0] = -Math.abs(nums[0]);
        else nums[a] = -Math.abs(nums[a]);
    }

    for (let i = 1; i < n; i++) {
        if (nums[i] > 0) return i;
    }

    if (nums[0] > 0) return n;
    return n + 1;
}

// Test
const nums = [1, 2, 0];
console.log(firstMissingPositiveBrute(nums));   // 3
console.log(firstMissingPositiveBetter(nums));  // 3
console.log(firstMissingPositiveBest(nums));    // 3
console.log(firstMissingPositiveOptimal(nums)); // 3