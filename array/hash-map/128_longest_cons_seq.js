// Pattern: Array, Hash Map

// LeetCode Problem 128: Longest consecutive sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.


/**
 * @name longestConsecutiveBrute
 * @description Brute Force Approach: For each number, keep checking the next number via nested scan.
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

/**
 * @name longestConsecutiveBetter
 * @description Better Approach: Sort array and count consecutive numbers linearly.
 * @timeComplexity O(nlogn)
 * @spaceComplexity O(1)
 */
function longestConsecutiveBetter(nums) {
    if (nums.length < 1) return 0
    nums.sort((a, b) => a - b)
    let longest = 1
    let count = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) continue
        if (nums[i] === nums[i + 1] - 1) {
            count++
        } else {
            longest = count > longest ? count : longest
            count = 1
        }
    }
    return longest
}

/**
 * @name longestConsecutiveOptimal
 * @description Optimal Approach: Use a Hash Set and only count forward from the start of each streak.
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function longestConsecutiveOptimal(nums) {
    if (nums.length < 1) return 0
    let numSet = new Set(nums)
    let longest = 1
    for (let n of numSet) {
        if (!numSet.has(n - 1)) {
            let count = 1
            while (numSet.has(n + count)) {
                count++
            }
            longest = count > longest ? count : longest
        }
    }
    return longest
}


// Test
const nums = [100, 4, 200, 1, 3, 2]
console.log(longestConsecutiveBrute(nums));
console.log(longestConsecutiveBetter(nums));
console.log(longestConsecutiveOptimal(nums));