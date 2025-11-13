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

// Test
const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagramsBrute(strs));   // true
