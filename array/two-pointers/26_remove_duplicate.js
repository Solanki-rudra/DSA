// Pattern: Array, Two Pointers

// LeetCode Problem 26: Remove Duplicates from Sorted Array
// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

/**
 * @name removeDuplicatesBrute
 * @description Brute Force: Check for duplicates and shift elements.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(1)
 */
function removeDuplicatesBrute(nums) {
    if (nums.length == 0) return 0
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        let isDuplicate = false
        for (let j = 0; j < k; j++) {
            if (nums[i] == nums[j]) {
                isDuplicate = true
                break;
            }
        }
        if (!isDuplicate) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
}


// Test
const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicatesBrute(nums));