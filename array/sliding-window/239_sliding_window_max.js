// Pattern: Array, Sliding Window

// LeetCode Problem 239: Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k
// which moves from left to right. Return the maximum value in each window.

/**
 * @name maxSlidingWindowBrute
 * @description Brute Force Approach:
 * For every fixed window of size k, scan all elements inside the window
 * and find the maximum.
 * @timeComplexity O(n * k)
 * @spaceComplexity O(1)
 */
function maxSlidingWindowBrute(nums, k) {
    let l = 0, r = k - 1
    let ans = []

    while (r < nums.length) {
        let max = nums[l]
        for (let i = l; i <= r; i++) {
            max = Math.max(max, nums[i])
        }
        ans.push(max)
        l++
        r++
    }

    return ans
}

/**
 * @name maxSlidingWindowOptimal
 * @description Optimal Approach (Monotonic Deque):
 * Maintain a decreasing deque of indices where the front always
 * represents the maximum element of the current window.
 * @timeComplexity O(n)
 * @spaceComplexity O(k)
 */
function maxSlidingWindowOptimal(nums, k) {
    let ans = []
    let que = [] // stores indices

    for (let i = 0; i < nums.length; i++) {

        // Remove indices out of the current window
        if (que.length && que[0] <= i - k) {
            que.shift()
        }

        // Maintain decreasing order
        while (que.length && nums[que[que.length - 1]] < nums[i]) {
            que.pop()
        }

        que.push(i)

        // Window ready → add max
        if (i >= k - 1) {
            ans.push(nums[que[0]])
        }
    }

    return ans
}

// Test
const nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
console.log(maxSlidingWindowBrute(nums, k))      // [3,3,5,5,6,7]
console.log(maxSlidingWindowOptimal(nums, k))    // [3,3,5,5,6,7]