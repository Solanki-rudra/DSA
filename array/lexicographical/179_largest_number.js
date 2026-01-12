// Pattern: Array, Lexicographical

// LeetCode Problem 179: Largest Number
// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it as a string.


/**
 * @name largestNumberBrute
 * @description Brute Force Approach: Sort the numbers based on concatenation results.
 * @timeComplexity O(n^2 * k) where k is the average number of digits in the numbers
 * @spaceComplexity O(1)
 */
function largestNumberBrute(nums) {
    nums = nums.map(String)
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] < nums[j] + nums[i]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
    if (nums[0] === '0') return '0'
    return nums.join('')
}

// Test
let nums = [1, 2, 3]
console.log(largestNumberBrute(nums));