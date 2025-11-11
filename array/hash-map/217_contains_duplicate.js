// Pattern: Array, Hash Map

// LeetCode Problem 217: Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


/**
* @name containsDuplicateBrute
* @description Brute Force Approach: Check all pairs to find the duplicates.
* @timeComplexity O(n^2)
* @spaceComplexity O(1)
*/
function containsDuplicateBrute(nums) {
    if(nums.length < 2) return false
    for(let i =0; i< nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] === nums[j]) return true
        }
    }
    return false
}

/**
* @name containsDuplicateBetter
* @description Better Approach: Sort the array and use two pointers to find the duplicates.
* @timeComplexity O(n log n)
* @spaceComplexity O(n)
*/
function containsDuplicateBetter(nums) {
    if (nums.length < 2) return false
    const sorted_nums = [...nums].sort((a,b) => a-b)
    for(let i=0; i<sorted_nums.length -1; i++){
        if(sorted_nums[i] === sorted_nums[i+1]) return true
    }
    return false
}

/**
* @name containsDuplicateOptimal
* @description Optimal Approach: Use a hash map to store the indices of the numbers and check for the duplicate.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function containsDuplicateOptimal(nums) {
    if (nums.length < 2) return false
    const preValues = {}
    for(let i = 0; i< nums.length; i++){
        if(preValues[nums[i]] !== undefined){
            return true
        }else{
            preValues[nums[i]] = i
        }
    }
    return false
}

// Test
const nums = [1,2,3,1]
console.log(containsDuplicateBrute(nums));
console.log(containsDuplicateBetter(nums));
console.log(containsDuplicateOptimal(nums));