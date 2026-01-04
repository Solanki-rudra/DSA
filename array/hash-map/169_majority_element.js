// Pattern: Array, Hash Map

// LeetCode Problem 169: Majority Element
// Given an array of integers nums, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @name majorityElementBrute
 * @description Brute Force Approach: For each element, count its occurrences by scanning the entire array.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(1)
 */
function majorityElementBrute(nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = i; j < nums.length; j++) {
            if (nums[j] === nums[i]) count++
        }
        if (count > nums.length / 2) return nums[i]
    }
}



/**
 * @name majorityElementBetter
 * @description Better Approach: Use a hash map to count occurrences of each element.
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function majorityElementBetter(nums) {
    let counts = {}
    for (let i = 0; i < nums.length; i++) {
        counts[nums[i]] = (counts[nums[i]] || 0) + 1
    }
    for (let key in counts) {
        if (counts[key] > nums.length / 2) {
            return Number(key)
        }
    }
}



/**
 * @name majorityElementOptimal
 * @description Optimal Approach: Boyer-Moore Voting Algorithm.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function majorityElementOptimal(nums) {
    let ele = null
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            ele = nums[i]
            count++
        } else if (ele === nums[i]) {
            count++
        } else {
            count--
        }
    }
    return ele
}



// Test
const nums = [3, 2, 3]
console.log(majorityElementBrute(nums));
console.log(majorityElementBetter(nums));
console.log(majorityElementOptimal(nums));