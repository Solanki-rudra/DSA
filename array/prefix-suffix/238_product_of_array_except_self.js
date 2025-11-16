// Pattern: Array, Prefix - Suffix

// LeetCode Problem 238: Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

/**
 * @name productExceptSelfBrute
 * @description Brute Force: For each index, multiply all other values.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(n) // result array
 */
function productExceptSelfBrute(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let prod = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) prod *= nums[j];
        }
        result.push(prod);
    }
    return result;
}

/**
 * @name productExceptSelfBetter
 * @description Better: Use separate prefix and postfix arrays.
 * @timeComplexity O(n)
 * @spaceComplexity O(n) // prefix + postfix
 */
function productExceptSelfBetter(nums) {
    let n = nums.length;
    let prefix = Array(n).fill(1);
    let postfix = Array(n).fill(1);
    let result = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    for (let j = n - 2; j >= 0; j--) {
        postfix[j] = postfix[j + 1] * nums[j + 1];
    }

    for (let k = 0; k < n; k++) {
        result[k] = prefix[k] * postfix[k];
    }

    return result;
}

/**
 * @name productExceptSelfOptimal
 * @description Optimal: Build prefix directly in result, then multiply by postfix.
 * @timeComplexity O(n)
 * @spaceComplexity O(1) // excluding result array
 */
function productExceptSelfOptimal(nums) {
    let n = nums.length;
    let result = Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let postfix = 1;
    for (let j = n - 1; j >= 0; j--) {
        result[j] *= postfix;
        postfix *= nums[j];
    }

    return result;
}

// Test
const nums = [1,2,3,4];
console.log(productExceptSelfBrute(nums));
console.log(productExceptSelfBetter(nums));
console.log(productExceptSelfOptimal(nums));
