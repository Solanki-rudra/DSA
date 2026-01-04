// Pattern: Array, Two Pointers

// LeetCode Problem 75: Sort Colors
// Given an array nums with n elements, sort them in-place so that they form a sequence of 0s, 1s, and 2s.

/**
 * @name sortColorsBrute
 * @description Brute Force: sort the array.
 * @timeComplexity O(n log n)
 * @spaceComplexity O(1)
 */
function sortColorsBrute(nums) {
    nums.sort((a, b) => a - b);
    return nums;
}

/**
 * @name sortColorsBetter
 * @description Better : Count occurrences of each color and overwrite the array.
 * @timeComplexity O(2n)
 * @spaceComplexity O(1)
 */
function sortColorsBetter(nums) {
    let reds = 0
    let whites = 0
    let blues = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) reds++
        else if (nums[i] === 1) whites++
        else blues++
    }
    let index = 0
    while (reds-- > 0) nums[index++] = 0
    while (whites-- > 0) nums[index++] = 1
    while (blues-- > 0) nums[index++] = 2
    return nums
}

/**
 * @name sortColorsOptimal
 * @description Optimal : Two pointers from both ends to calculate trapped water.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function sortColorsOptimal(nums) {
    let l = 0, h = nums.length - 1
    let c = 0
    while (c <= h) {
        if (nums[c] === 0) {
            [nums[l], nums[c]] = [nums[c], nums[l]]
            l++
            c++
        } else if (nums[c] === 2) {
            [nums[h], nums[c]] = [nums[c], nums[h]]
            h--
        } else {
            c++
        }
    }
    return nums
}

// Test
const nums = [2, 0, 2, 1, 1, 0];
console.log(sortColorsBrute(nums));
console.log(sortColorsBetter(nums));
console.log(sortColorsOptimal(nums));