// Pattern: Array, Binary Search

// LeetCode Problem 33: Search in Rotated Sorted Array
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array return its index, otherwise return -1.

/**
 * @name searchBrute
 * @description Brute Force: find the minimum by linear scan.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function searchBrute(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i
    }
    return -1
}


/**
 * @name searchOptimal
 * @description Optimal : Binary Search to find the target element.
 * @timeComplexity O(log n)
 * @spaceComplexity O(1)
 */
function searchOptimal(nums, target) {
    let l = 0, r = nums.length - 1
    while (l <= r) {
        let mid = Math.floor((r + l) / 2)
        if (nums[mid] === target) return mid
        else if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && nums[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {
            if (nums[r] >= target && nums[mid] < target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return -1
}

// Test
const nums = [4, 5, 6, 7, 0, 1, 2], target = 0
console.log(searchBrute(nums, target));
console.log(searchOptimal(nums, target));