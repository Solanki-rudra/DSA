// Pattern: Array, Two Pointers

// LeetCode Problem 167: Two Sum II - Input Array Is Sorted
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

/**
 * @name twoSumBrute
 * @description Brute Force: Try all pairs and check if their sum equals target.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(1)
 */
function twoSumBrute(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }
        }
    }
}

/**
 * @name twoSumBetter
 * @description Better: For each element, binary search the complement.
 * @timeComplexity O(n log n)
 * @spaceComplexity O(1)
 */
function twoSumBetter(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i];
        let idx = binarySearch(numbers, complement, i + 1, numbers.length - 1);
        if (idx !== -1) {
            return [i + 1, idx + 1];
        }
    }
}

/**
 * @name twoSumOptimal
 * @description Optimal: Two pointers from both ends of sorted array.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function twoSumOptimal(numbers, target) {
    let l = 0, r = numbers.length - 1;
    while (l < r) {
        let sum = numbers[l] + numbers[r];
        if (sum === target) return [l + 1, r + 1];
        else if (sum < target) l++;
        else r--;
    }
    return null;
}

function binarySearch(arr, n, left, right) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === n) return mid;
        else if (arr[mid] < n) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// Test
const numbers = [2, 7, 11, 15], target = 9;
console.log(twoSumBrute(numbers, target));
console.log(twoSumBetter(numbers, target));
console.log(twoSumOptimal(numbers, target));