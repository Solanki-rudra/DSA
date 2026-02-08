
import { Stack } from "../Stack.js"

// Pattern: Stack, Monotonic Stack

// LeetCode Problem 503: Next Greater Element II
// Given a circular array (the next element of the last element is the first element), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

/**
 * @name nextGreaterElementsBrute
 * @description Brute Force Approach: For each element in the array, scan forward in a circular manner to find the next greater element.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(n)
 */
function nextGreaterElementsBrute(nums) {
    let result = []
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n + i; j++) {
            if (nums[i] < nums[j % n]) {
                result[i] = nums[j % n]
                break
            }
            result[i] = -1
        }
    }
    return result
}

/**
 * @name nextGreaterElementsOptimal
 * @description Optimal Approach: Use a monotonic decreasing stack to track elements and compute next greater elements efficiently in a circular manner.
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function nextGreaterElementsOptimal(nums) {
    let result = []
    let n = nums.length;
    let stack = new Stack()
    for (let i = 2 * n - 1; i >= 0; i--) {
        while (!stack.isEmpty() && stack.peek() <= nums[i % n]) {
            stack.pop()
        }
        if (i < n) {
            result[i % n] = stack.isEmpty() ? -1 : stack.peek()
        }
        stack.push(nums[i % n])
    }
    return result
}


// Test
let nums = [1, 2, 1]

console.log(nextGreaterElementsBrute(nums));
console.log(nextGreaterElementsOptimal(nums));