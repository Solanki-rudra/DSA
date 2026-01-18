// Pattern: Array, Two Pointers

// LeetCode Problem 287: Find the Duplicate Number
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.

/**
 * @name findDuplicateBrute
 * @description Brute Force: sort the array.
 * @timeComplexity O(n log n)
 * @spaceComplexity O(1)
 */
function findDuplicateBrute(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) return nums[i]
    }
}

/**
 * @name findDuplicateBetter
 * @description Better : Use a hash map to track visited numbers.
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function findDuplicateBetter(nums) {
    let visited = {}
    for (let i = 0; i < nums.length; i++) {
        if (visited[nums[i]] !== undefined) return nums[i]
        visited[nums[i]] = 1
    }
}

/**
 * @name findDuplicateOptimal
 * @description Optimal : Floyd's Tortoise and Hare (Cycle Detection).
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function findDuplicateOptimal(nums) {
    let slow = nums[0], fast = nums[0]
    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow === fast) break
    }
    slow = nums[0]
    while (slow !== fast) {
        slow = nums[slow]
        fast = nums[fast]
    }
    return slow
}

// Test
const nums = [1, 3, 4, 2, 2];
console.log(findDuplicateBrute(nums));
console.log(findDuplicateBetter(nums));
console.log(findDuplicateOptimal(nums));