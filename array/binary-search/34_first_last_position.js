// Pattern: Array, Binary Search

// LeetCode Problem 34: First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1].

/**
 * @name searchRangeBrute
 * @description Brute Force: Try all elements and track first and last positions.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function searchRangeBrute(nums, target) {
    let ans = [-1, -1]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (ans[0] !== -1) {
                ans[1] = i
            } else {
                ans[0] = i
                ans[1] = i
            }
        }
    }
    return ans
}

/**
 * @name searchRangeBetter
 * @description Better: Binary search to find one occurrence, then expand to find first and last positions.
 * @timeComplexity O(log n) in average case, O(n) in worst case
 * @spaceComplexity O(1)
 */
function searchRangeBetter(nums, target) {
    let ans = [-1, -1]
    let l = 0, r = nums.length - 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (nums[mid] === target) {
            let left = mid
            let right = mid
            while (nums[left] === target) {
                left--
            }
            while (nums[right] === target) {
                right++
            }
            ans[0] = left + 1
            ans[1] = right - 1
            return ans
        } else if (nums[mid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return ans
}

/**
 * @name searchRangeOptimal
 * @description Optimal: Two binary searches to find first and last positions.
 * @timeComplexity O(log n)
 * @spaceComplexity O(1)
 */
function searchRangeOptimal(nums, target) {
    function findInd(isFirst = false) {
        let l = 0, r = nums.length - 1
        let ans = -1
        while (l <= r) {
            let mid = Math.floor((l + r) / 2)
            if (nums[mid] === target) {
                ans = mid
                isFirst ? r = mid - 1 : l = mid + 1
            } else if (nums[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return ans
    }
    return [findInd(true), findInd(false)]
}


// Test
const nums = [5, 7, 7, 8, 8, 10], target = 8
console.log(searchRangeBrute(nums, target));
console.log(searchRangeBetter(nums, target));
console.log(searchRangeOptimal(nums, target));