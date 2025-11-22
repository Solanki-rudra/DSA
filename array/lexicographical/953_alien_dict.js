// Pattern: Array, Lexicographical

// LeetCode Problem 953: Verifying an Alien Dictionary
// Given an array of words and a custom alien alphabet order,
// return true if and only if the words are sorted according to that order.


/**
 * @name isAlienSortedBrute
 * @description Brute Force Approach: Compare each word with every other later word.
 * @timeComplexity O(n^2 * m)
 * @spaceComplexity O(1)
 */
function isAlienSortedBrute(words, order) {
    let orderHash = {};
    for (let i = 0; i < order.length; i++) {
        orderHash[order[i]] = i;
    }

    for (let j = 0; j < words.length; j++) {
        for (let k = j + 1; k < words.length; k++) {
            let curr = words[j];
            let next = words[k];
            let m = 0;

            while (m < curr.length && m < next.length) {
                if (orderHash[curr[m]] > orderHash[next[m]]) return false;
                if (orderHash[curr[m]] < orderHash[next[m]]) break;
                m++;
            }

            if (curr.length > m && next.length === m) return false;
        }
    }
    return true;
}


/**
 * @name isAlienSortedBetter
 * @description Better Approach: Sort the array using custom comparator and compare it with original.
 * @timeComplexity O(n log n * m)
 * @spaceComplexity O(n)
 */
function isAlienSortedBetter(words, order) {
    let orderHash = {};
    for (let i = 0; i < order.length; i++) {
        orderHash[order[i]] = i;
    }

    let sortedWords = [...words].sort((a, b) => {
        let i = 0;
        while (i < a.length && i < b.length) {
            if (orderHash[a[i]] > orderHash[b[i]]) return 1;
            if (orderHash[a[i]] < orderHash[b[i]]) return -1;
            i++;
        }
        return a.length - b.length;
    });

    return JSON.stringify(sortedWords) === JSON.stringify(words);
}


/**
 * @name isAlienSortedOptimal
 * @description Optimal Approach: Compare only adjacent words instead of sorting.
 * @timeComplexity O(n * m)
 * @spaceComplexity O(1)
 */
function isAlienSortedOptimal(words, order) {
    let orderHash = {};
    for (let i = 0; i < order.length; i++) {
        orderHash[order[i]] = i;
    }

    for (let j = 0; j < words.length - 1; j++) {
        let curr = words[j];
        let next = words[j + 1];
        let k = 0;

        while (k < curr.length && k < next.length) {
            if (orderHash[curr[k]] > orderHash[next[k]]) return false;
            if (orderHash[curr[k]] < orderHash[next[k]]) break;
            k++;
        }

        if (k === next.length && curr.length > next.length) return false;
    }

    return true;
}


// Test
let words = ["hello", "leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz";
console.log(isAlienSortedBrute(words, order));
console.log(isAlienSortedBetter(words, order));
console.log(isAlienSortedOptimal(words, order));
