// Pattern: String, Greedy

// LeetCode Problem 13: Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

/**
* @name romanToInt
* @description Greedy Approach: Add values normally, subtract when a smaller numeral appears before a larger one.
* @timeComplexity O(n)
* @spaceComplexity O(1)
*/
function romanToInt(s) {
    const symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let curr = symbols[s[i]];
        let next = symbols[s[i + 1]];

        if (next && next > curr) {
            result += next - curr;
            i++;
        } else {
            result += curr;
        }
    }

    return result;
}

// Test
const str = "MCMXCIV"; // 1994
console.log(romanToInt(str));