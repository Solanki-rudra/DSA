// Pattern: Dynamic Programming, Longest subsequence

/**
 * LeetCode #300 - Longest Increasing Subsequence
 *
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 */

/**
 * Approach 1: Dynamic Programming
 *
 * Time Complexity: O(n^2) - We have a nested loop iterating over the array.
 * Space Complexity: O(n) - We use an array of size n to store the LIS ending at each index.
 *
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS1(nums) {
    if (!nums || nums.length === 0) return 0;

    const dp = new Array(nums.length).fill(1);
    let maxLIS = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLIS = Math.max(maxLIS, dp[i]);
    }

    return maxLIS;
}

/**
 * Approach 2: Binary Search (Patience Sorting)
 *
 * Time Complexity: O(n log n) - We iterate through the array once and perform binary search.
 * Space Complexity: O(n) - We use an array to store the active subsequence.
 *
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS2(nums) {
    if (!nums || nums.length === 0) return 0;

    const sub = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num > sub[sub.length - 1]) {
            // If num is greater than the largest element, append it.
            sub.push(num);
        } else {
            // Otherwise, find the smallest element in sub that is >= num and replace it.
            // This keeps the potential elements in the subsequence as small as possible.
            let left = 0;
            let right = sub.length - 1;

            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (sub[mid] < num) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            sub[left] = num;
        }
    }

    return sub.length;
}

// Test 
const testCases = [
    { nums: [10, 9, 2, 5, 3, 7, 101, 18], expected: 4 }, // [2, 3, 7, 101]
    { nums: [0, 1, 0, 3, 2, 3], expected: 4 }, // [0, 1, 2, 3]
    { nums: [7, 7, 7, 7, 7, 7, 7], expected: 1 }, // [7]
    { nums: [4, 10, 4, 3, 8, 9], expected: 3 }, // [4, 8, 9]
];
