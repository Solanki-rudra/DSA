// Pattern: Array, Hash Map

// LeetCode Problem 49: Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.


/**
 * @name groupAnagramsBrute
 * @description Brute Force Approach: Check each sort string with others by loop.
 * @timeComplexity O(n^2 * klogk)
 * @spaceComplexity O(n*k)
 */
function groupAnagramsBrute(strs) {
    let n = strs.length;
    let visited = new Array(n).fill(false);
    let result = [];
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        let group = [strs[i]];
        visited[i] = true;
        let sorted_i = strs[i].split('').sort().join('');
        for (let j = i + 1; j < n; j++) {
            if (!visited[j]) {
                let sorted_j = strs[j].split('').sort().join('');
                if (sorted_i === sorted_j) {
                    group.push(strs[j]);
                    visited[j] = true;
                }
            }
        }
        result.push(group);
    }
    return result;
}

/**
 * @name groupAnagramsBetter
 * @description Better Approach: Sort each string, then sort array and group neighbors.
 * @timeComplexity O(n * k log k + n log n)
 * @spaceComplexity O(n * k)
 */
function groupAnagramsBetter(strs) {
    if (strs.length === 0) return [];
    const sorted = strs.map(s => [s.split('').sort().join(''), s]);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    const result = [];
    let group = [sorted[0][1]];

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i][0] === sorted[i - 1][0]) {
            group.push(sorted[i][1]);
        } else {
            result.push(group);
            group = [sorted[i][1]];
        }
    }
    result.push(group);
    return result;
}

// Test
const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagramsBrute(strs));   // true
console.log(groupAnagramsBetter(strs));  // true
