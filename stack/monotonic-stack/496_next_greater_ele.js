
import { Stack } from "../Stack.js"

// Pattern: Stack, Monotonic Stack

// LeetCode Problem 496: Next Greater Element I
// You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are a subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

/**
 * @name nextGreaterElementBrute
 * @description Brute Force Approach: For each element in nums2, scan forward to find the next greater element.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(1)
 */
function nextGreaterElementBrute(nums1, nums2) {
    let store = []
    for (let i = 0; i < nums2.length; i++) {
        for (let j = i + 1; j < nums2.length; j++) {
            if (nums2[i] < nums2[j]) {
                store[i] = nums2[j]
                break
            }
        }
        if (store[i] === undefined) store[i] = -1
    }
    let hashMap = new Map()
    for (let i = 0; i < nums2.length; i++) {
        hashMap.set(nums2[i], store[i])
    }
    let result = []
    for (let n of nums1) {
        result.push(hashMap.get(n))
    }
    return result
}

/**
 * @name nextGreaterElementOptimal
 * @description Optimal Approach: Use a monotonic decreasing stack to track elements and compute next greater elements efficiently.
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function nextGreaterElementOptimal(nums1, nums2) {
    let stack = new Stack()
    let hashMap = new Map()
    for (let i = nums2.length - 1; i >= 0; i--) {
        while (!stack.isEmpty() && stack.peek() < nums2[i]) {
            stack.pop()
        }
        if (stack.isEmpty()) {
            hashMap.set(nums2[i], -1)
        } else {
            hashMap.set(nums2[i], stack.peek())
        }
        stack.push(nums2[i])
    }
    let result = []
    for (let n of nums1) {
        result.push(hashMap.get(n))
    }
    return result
}


// Test
let nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]

console.log(nextGreaterElementBrute(nums1, nums2));
console.log(nextGreaterElementOptimal(nums1, nums2));