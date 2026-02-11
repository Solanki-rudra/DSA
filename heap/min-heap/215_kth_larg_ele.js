import { MinHeap } from "../MinHeap.js"

// Pattern: Heap, Min-Heap

// LeetCode Problem 215: Kth Largest Element in an Array
// You are given an integer array nums and an integer k.
// Return the kth largest element in the array.

/**
* @name findKthLargestBrute
* @description  Approach: Find max element k times by repeatedly searching and removing the largest element.
* @timeComplexity O(k * n) - For each of k iterations, we find max (O(n)), find index (O(n)), and splice (O(n)).
* @spaceComplexity O(1) - We are modifying the input array in place.
*/
function findKthLargestBrute(nums, k) {
    while (k > 1) {
        let max = Math.max(...nums)
        nums.splice(nums.indexOf(max), 1)
        k--
    }
    return Math.max(...nums)
}

/**
* @name findKthLargestBetter
* @description  Approach: Sort the array in descending order and return the element at index k-1.
* @timeComplexity O(n log n) - Sorting takes O(n log n) time.
* @spaceComplexity O(1) - We are modifying the input array in place (or O(log n) if counting sort's internal space).
*/
function findKthLargestBetter(nums, k) {
    nums.sort((a, b) => b - a)
    return nums[k - 1]
}

/**
* @name findKthLargestOptimal
* @description  Approach: Use a min-heap with capacity k to maintain the k largest elements. The root is the kth largest.
* @timeComplexity O(n log k) - Iterate through n elements; each push/poll is O(log k) since heap size is capped at k.
* @spaceComplexity O(k) - We maintain a MinHeap of size at most k.
*/
function findKthLargestOptimal(nums, k) {
    let minHeap = new MinHeap(k)
    for (let num of nums) {
        minHeap.push(num)
    }
    return minHeap.peek()
}

console.log(findKthLargestBrute([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output: 4
console.log(findKthLargestBetter([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output: 4
console.log(findKthLargestOptimal([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output: 4