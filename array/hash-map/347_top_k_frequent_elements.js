// Pattern: Array, Hash Map, Bucket Sort

// LeetCode Problem 347: Top K Frequent Elements
// Return the k most frequent elements.

/**
 * @name topKFrequentBrute
 * @description Brute Force: Count frequency using nested loops + sort.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(n)
 */
function topKFrequentBrute(nums, k) {
    let freq = {};
    for (let i = 0; i < nums.length; i++) {
        if (freq[nums[i]]) continue;
        freq[nums[i]] = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) freq[nums[i]]++;
        }
    }
    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, k).map(e => Number(e[0]));
}

/**
 * @name topKFrequentBetter
 * @description Better: Count frequency using hash map + sort by value.
 * @timeComplexity O(n log n)
 * @spaceComplexity O(n)
 */
function topKFrequentBetter(nums, k) {
    let freq = {};
    for (let n of nums) freq[n] = (freq[n] || 0) + 1;

    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, k).map(e => Number(e[0]));
}

/**
 * @name topKFrequentOptimal
 * @description Optimal: Bucket sort using frequency counts.
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function topKFrequentOptimal(nums, k) {
    let freq = {};
    for (let n of nums) freq[n] = (freq[n] || 0) + 1
    let bucket = Array.from({ length: nums.length + 1 }, () => [])
    for (let key in freq) {
        bucket[freq[key]].push(key)
    }
    let result = []
    for (let j = nums.length; j >= 0 && result.length < k; j--) {
        if (bucket[j].length === 0) continue
        result.push(...bucket[j])
    }
    return result.map(Number).slice(0, k)
}

// Test
const nums = [4, 4, 1, 1, 1, 2, 2, 3, 4, 4, 5], k = 2;
console.log(topKFrequentBrute(nums, k));
console.log(topKFrequentBetter(nums, k));
console.log(topKFrequentOptimal(nums, k));
