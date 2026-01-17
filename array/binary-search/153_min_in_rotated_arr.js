// Pattern: Array, Binary Search

// LeetCode Problem 153: Find Minimum in Rotated Sorted Array
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// Find the minimum element in O(log n) time.

/**
 * @name findMinBrute
 * @description Brute Force: find the minimum by linear scan.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function findMinBrute(nums) {
    let ans = Infinity
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < ans) ans = nums[i]
    }
    return ans
}


/**
 * @name findMinOptimal
 * @description Optimal : Binary Search to find the minimum element.
 * @timeComplexity O(log n)
 * @spaceComplexity O(1)
 */
function findMinOptimal(nums) {
    let ans = Infinity
    let l = 0, r = nums.length - 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (nums[l] <= nums[mid]) {
            ans = Math.min(nums[l], ans)
            l = mid + 1
        } else {
            ans = Math.min(nums[mid], ans)
            r = mid - 1
        }
    }
    return ans
}

// Test
const nums = [3, 4, 5, 1, 2];
console.log(findMinBrute(nums));
console.log(findMinOptimal(nums));