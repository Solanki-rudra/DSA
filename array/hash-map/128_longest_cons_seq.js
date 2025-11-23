// Pattern: Array, Hash Map

// LeetCode Problem 128: Longest consecutive sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.


/**
 * @name longestConsecutiveBrute
 * @description Brute Force Approach: check each and every next number by nested loops.
 * @timeComplexity O(n^3)
 * @spaceComplexity O(1)
 */
function longestConsecutiveBrute(nums) {
    if (nums.length < 1) return 0
    let longest = 1
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        let next = current + 1
        let count = 1
        while (true) {
            let found = false
            for (let j = 0; j < nums.length; j++) {
                if (nums[j] === next) {
                    found = true
                    break
                }
            }
            if (found) {
                count++
                next++
            } else {
                break
            }
        }
        longest = count > longest ? count : longest
    }
    return longest
}


// Test
const nums = [100, 4, 200, 1, 3, 2]
console.log(longestConsecutiveBrute(nums));
