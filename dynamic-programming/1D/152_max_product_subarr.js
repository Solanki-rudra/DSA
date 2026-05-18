// Pattern: Dynamic Programming, 1D

// LeetCode Problem 152: Max Product Subarray
// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
// A subarray is a contiguous subsequence of the array.

/**
 * @name maxProduct1
 * @description  Approach: Prefix & Suffix Products (Analytical)
 * The maximum product subarray must start at the beginning or end at the end of the array (or subsegments between zeros).
 * By tracking the running product from left to right (prefix) and right to left (suffix), and resetting them to 1 when a zero is encountered,
 * we can determine the maximum product.
 * @timeComplexity O(n) where n is the length of the array
 * @spaceComplexity O(1)
 */
function maxProduct1(nums) {
    let ans = -Infinity, n = nums.length, prefix = 1, suffix = 1
    for (let i = 0; i < n; i++) {
        if (prefix === 0) prefix = 1
        if (suffix === 0) suffix = 1
        prefix *= nums[i]
        suffix *= nums[n - i - 1]
        ans = Math.max(ans, prefix, suffix)
    }
    return ans
}

/**
 * @name maxProduct2
 * @description  Approach: Dynamic Programming (Min/Max Tracking)
 * Since negative numbers can turn the smallest product (most negative) into the largest product (most positive) when multiplied by another negative number,
 * we must track both the maximum and minimum product subarrays ending at the current position.
 * At each element, the new maximum and minimum are computed from the current element, the current element times the previous maximum, and the current element times the previous minimum.
 * @timeComplexity O(n) where n is the length of the array
 * @spaceComplexity O(1)
 */
function maxProduct2(nums) {
    let ans = nums[0], len = nums.length, max = nums[0], min = nums[0]
    for (let i = 1; i < len; i++) {
        let n = nums[i]
        let prevMax = max, prevMin = min
        max = Math.max(n, prevMax * n, prevMin * n)
        min = Math.min(n, prevMin * n, prevMax * n)
        ans = Math.max(ans, max)
    }
    return ans
}

// Test
console.log(maxProduct1([2, 3, -2, 4])) // Output: 6
console.log(maxProduct1([2, 3, -2, 4, -1])) // Output: 48
console.log(maxProduct1([0, 2])) // Output: 2
console.log(maxProduct1([-2, 3, -4])) // Output: 24

console.log(maxProduct2([2, 3, -2, 4])) // Output: 6
console.log(maxProduct2([2, 3, -2, 4, -1])) // Output: 48
console.log(maxProduct2([0, 2])) // Output: 2
console.log(maxProduct2([-2, 3, -4])) // Output: 24