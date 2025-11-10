// Pattern: Array, Hash Map

// LeetCode Problem 1: Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

/**
* @name twoSumBrute
* @description Brute Force Approach: Check all pairs to find the two numbers that add up to the target.
* @timeComplexity O(n^2)
* @spaceComplexity O(1)
*/
function twoSumBrute(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

/**
* @name twoSumBetter
* @description Better Approach: Sort the array and use two pointers to find the two numbers that add up to the target.
* @timeComplexity O(n log n)
* @spaceComplexity O(n)
*/
function twoSumBetter(nums, target) {
    const arr = nums.map((num, i) => [num, i]);
    arr.sort((a, b) => a[0] - b[0]);

    let left = 0, right = arr.length - 1;

    while (left < right) {
        const sum = arr[left][0] + arr[right][0];
        if (sum === target) return [arr[left][1], arr[right][1]];
        if (sum < target) left++;
        else right--;
    }
    return [];
}

/**
* @name twoSumOptimal
* @description Optimal Approach: Use a hash map to store the indices of the numbers and check for the complement.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function twoSumOptimal(nums, target) {
    const indexByValue = {};
    for (let i = 0; i < nums.length; i++) {
        const secondValue = target - nums[i];
        if (indexByValue[secondValue] !== undefined) {
            return [indexByValue[secondValue], i];
        }
        indexByValue[nums[i]] = i;
    }
    return [];
}

// Test
const nums = [2, 7, 11, 15], target = 9;
console.log(twoSumBrute(nums, target));   // [0,1]
console.log(twoSumBetter(nums, target));  // [0,1]
console.log(twoSumOptimal(nums, target)); // [0,1]