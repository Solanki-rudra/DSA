// Pattern: Array, Hash Map

// LeetCode Problem 49: Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

/**
 * @name groupAnagramsBrute
 * @description Brute Force Approach: Compare each string with every other by sorting inside nested loop.
 * @timeComplexity O(n^2 * k log k)
 * @spaceComplexity O(n * k)
 */
function groupAnagramsBrute(strs) {
    const n = strs.length;
    const visited = new Array(n).fill(false);
    const result = [];

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;

        const group = [strs[i]];
        visited[i] = true;

        const sorted_i = strs[i].split('').sort().join('');

        for (let j = i + 1; j < n; j++) {
            if (!visited[j]) {
                const sorted_j = strs[j].split('').sort().join('');
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
 * @description Better Approach: Map each string → (sortedString, originalString), sort the mapped list, then group neighbors.
 * @timeComplexity O(n * k log k + n log n)
 * @spaceComplexity O(n * k)
 */
function groupAnagramsBetter(strs) {
    if (strs.length === 0) return [];

    // Step 1: Convert to [sortedString, originalString]
    const mapped = strs.map(str => [str.split('').sort().join(''), str]);

    // Step 2: Sort list by sorted key
    mapped.sort((a, b) => a[0].localeCompare(b[0]));

    // Step 3: Build groups
    const result = [];
    let currentGroup = [mapped[0][1]];

    for (let i = 1; i < mapped.length; i++) {
        if (mapped[i][0] === mapped[i - 1][0]) {
            currentGroup.push(mapped[i][1]);
        } else {
            result.push(currentGroup);
            currentGroup = [mapped[i][1]];
        }
    }

    result.push(currentGroup);
    return result;
}



/**
 * @name groupAnagramsOptimal
 * @description Optimal Approach: Use a hash map to store groups using the sorted version as the key.
 * @timeComplexity O(n * k log k)
 * @spaceComplexity O(n * k)
 */
function groupAnagramsOptimal(strs) {
    const map = {};

    for (const word of strs) {
        const sorted = word.split('').sort().join('');

        if (!map[sorted]) {
            map[sorted] = [];
        }
        map[sorted].push(word);
    }

    return Object.values(map);
}



// Test
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagramsBrute(strs));
console.log(groupAnagramsBetter(strs));
console.log(groupAnagramsOptimal(strs));
