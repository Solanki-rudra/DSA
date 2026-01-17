// Pattern: Array, Binary Search

// LeetCode Problem 4: Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

/**
 * @name findMedianSortedArrays
 * @description Brute Force: merge two arrays and find the median.
 * @timeComplexity O(m + n)
 * @spaceComplexity O(m + n)
 */
function findMedianSortedArrays(nums1, nums2) {
    let arr = []
    let i = 0, j = 0
    while (nums1[i] !== undefined && nums2[j] !== undefined) {
        if (nums1[i] < nums2[j]) {
            arr.push(nums1[i])
            i++
        } else {
            arr.push(nums2[j])
            j++
        }
    }
    while (nums1[i] !== undefined) {
        arr.push(nums1[i])
        i++
    }
    while (nums2[j] !== undefined) {
        arr.push(nums2[j])
        j++
    }
    let len = arr.length
    let isEven = len % 2 === 0
    let mid = Math.floor(len / 2)

    if (isEven) {
        return (arr[mid] + arr[mid - 1]) / 2
    } else {
        return arr[mid]
    }
}


/**
 * @name findMedianSortedOptimal
 * @description Optimal : Binary Search to find the median.
 * @timeComplexity O(log(min(m, n)))
 * @spaceComplexity O(1)
 */
function findMedianSortedOptimal(nums1, nums2) {
    let m = nums1.length, n = nums2.length
    if (m > n) {
        return findMedianSortedArrays(nums2, nums1)
    }
    let low = 0, high = m
    while (low <= high) {
        let cut1 = Math.floor((high + low) / 2)
        let cut2 = Math.floor((m + n + 1) / 2) - cut1
        let left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1]
        let left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1]
        let right1 = cut1 === m ? Infinity : nums1[cut1]
        let right2 = cut2 === n ? Infinity : nums2[cut2]
        if (left1 <= right2 && left2 <= right1) {
            if ((m + n) % 2 === 0) {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2
            } else {
                return Math.max(left1, left2)
            }
        } else if (left1 > right2) {
            high = cut1 - 1
        } else {
            low = cut1 + 1
        }
    }
    return 0
}

// Test
const nums1 = [1, 2], nums2 = [3, 4]
console.log(findMedianSortedArrays(nums1, nums2));
console.log(findMedianSortedOptimal(nums1, nums2));