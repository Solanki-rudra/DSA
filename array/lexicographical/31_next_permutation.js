// Pattern: Array, Lexicographical

// LeetCode Problem 31: Next Permutation
// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.


/**
 * @name nextPermutationBrute
 * @description Brute Force Approach: Generate all permutations and find the next one.
 * @timeComplexity O(n * n!)
 * @spaceComplexity O(n!)
 */
function nextPermutationBrute(nums) {
    let match = [...nums].join(',')
    nums.sort((a, b) => a - b)
    let perms = [[...nums]]
    while (gen(nums)) {
        perms.push([...nums])
    }
    let ans;
    for (let i = 0; i < perms.length; i++) {
        console.log(match, perms[i].join(','))
        if (match === perms[i].join(',')) {
            ans = perms[i + 1] ? perms[i + 1] : perms[0]
            break
        }
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = ans[i]
    }
    return nums
}

function gen(nums) {
    let n = nums.length
    let i = n - 2
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }
    if (i < 0) return false
    let j = n - 1
    while (nums[j] <= nums[i]) {
        j--
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]
    let left = i + 1, right = n - 1
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
    return true
}


/**
 * @name nextPermutationOptimal
 * @description Optimal Approach: Find the next lexicographical permutation in-place.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function nextPermutationOptimal(nums) {
    let n = nums.length
    let i = n - 2
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }
    if (i >= 0) {
        let j = n - 1
        while (nums[j] <= nums[i]) {
            j--
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    let l = i + 1, r = n - 1
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++
        r--
    }
    return nums
}


// Test
let nums = [1, 2, 3]
console.log(nextPermutationBrute(nums));
console.log(nextPermutationOptimal(nums));