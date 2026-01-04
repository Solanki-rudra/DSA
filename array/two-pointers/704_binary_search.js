// Pattern: Array, Two Pointers

// LeetCode Problem 704: Binary Search
// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

/**
 * @name searchBrute
 * @description Brute Force: Try all elements and check if it equals target.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function searchBrute(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}

/**
 * @name searchOptimal
 * @description Optimal: Binary Search.
 * @timeComplexity O(log n)
 * @spaceComplexity O(1)
 */
function searchOptimal(nums, target) {
    let l = 0, r = nums.length - 1
    while (l <= r) {
        let ind = Math.floor((l + r) / 2)
        let mid = nums[ind]
        if (mid === target) {
            return ind
        } else if (mid < target) {
            l = ind + 1
        } else if (mid > target) {
            r = ind - 1
        }
    }
    return -1
}


// Test
let nums = [-1, 0, 3, 5, 9, 12], target = 9
console.log(searchBrute(nums, target));
console.log(searchOptimal(nums, target));