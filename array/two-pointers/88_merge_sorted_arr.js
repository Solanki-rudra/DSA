// Pattern: Array, Two Pointers

// LeetCode Problem 88: Merge Sorted Array
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array. The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

/**
 * @name mergeBrute
 * @description Brute Force: Copy and sort.
 * @timeComplexity O(n log n)
 * @spaceComplexity O(1)
 */
function mergeBrute(nums1, m, nums2, n) {
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[(i - n) < 0 ? 0 : i - n]
    }
    nums1.sort((a, b) => a - b)
    return nums1
}

/**
 * @name mergeOptimal
 * @description Optimal: Two pointers from the end to merge in place.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function mergeOptimal(nums1, m, nums2, n) {
    let i = m + n - 1
    let j = m - 1
    let k = n - 1
    while (k >= 0) {
        if (j >= 0 && nums1[j] > nums2[k]) {
            nums1[i] = nums1[j]
            j--
        } else {
            nums1[i] = nums2[k]
            k--
        }
        i--
    }
    return nums1
}


// Test
const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
console.log(mergeBrute(nums1, m, nums2, n));
console.log(mergeOptimal(nums1, m, nums2, n));