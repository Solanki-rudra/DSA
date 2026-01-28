
import { Stack } from "../Stack.js"

// Pattern: Stack, Monotonic Stack

// LeetCode Problem 84: Largest Rectangle in Histogram
// Given an array of integers representing the heights of bars in a histogram, find the area of the largest rectangle.

/**
 * @name largestRectangleAreaBrute
 * @description Brute Force Approach: Check every possible span and track the minimum height within that span to compute area.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(1)
 */
function largestRectangleAreaBrute(heights) {
    let ans = 0
    for (let i = 0; i < heights.length; i++) {
        let minH = heights[i]
        for (let j = i; j < heights.length; j++) {
            minH = Math.min(minH, heights[j])
            ans = Math.max(ans, (j - i + 1) * minH)
        }
    }
    return ans
}

/**
 * @name largestRectangleAreaBetter
 * @description Better Approach: Use a monotonic increasing stack of indices to compute previous and next smaller element indices for each bar.
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function largestRectangleAreaBetter(heights) {
    let n = heights.length
    let prefix = []
    let suffix = []
    let stack = new Stack()
    let ans = 0
    for (let i = 0; i < heights.length; i++) {
        while (!stack.isEmpty() && heights[stack.peek()] >= heights[i]) {
            stack.pop()
        }
        prefix[i] = stack.isEmpty() ? -1 : stack.peek()
        stack.push(i)
    }
    stack = new Stack()
    for (let j = n - 1; j >= 0; j--) {
        while (!stack.isEmpty() && heights[stack.peek()] >= heights[j]) {
            stack.pop()
        }
        suffix[j] = stack.isEmpty() ? n : stack.peek()
        stack.push(j)
    }
    for (let k = 0; k < heights.length; k++) {
        ans = Math.max(ans, (suffix[k] - prefix[k] - 1) * heights[k])
    }
    return ans
}

/**
 * @name largestRectangleAreaOptimal
 * @description Optimal Approach: Single pass using a monotonic increasing stack to compute areas on the fly.
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function largestRectangleAreaOptimal(heights) {
    let ans = 0
    let stack = new Stack()

    for (let i = 0; i < heights.length; i++) {
        while (!stack.isEmpty() && heights[stack.peek()] > heights[i]) {
            let last = stack.pop()
            let width = stack.isEmpty()
                ? i
                : i - stack.peek() - 1
            ans = Math.max(ans, heights[last] * width)
        }
        stack.push(i)
    }

    while (!stack.isEmpty()) {
        let last = stack.pop()
        let width = stack.isEmpty()
            ? heights.length
            : heights.length - stack.peek() - 1
        ans = Math.max(ans, heights[last] * width)
    }

    return ans
}


// Test
let heights = [2, 1, 5, 6, 2, 3]

console.log(largestRectangleAreaBrute(heights));
console.log(largestRectangleAreaBetter(heights));
console.log(largestRectangleAreaOptimal(heights));