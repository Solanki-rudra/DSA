// Pattern: String, Parsing

// LeetCode Problem 58: Length of Last Word
// Write a function to find the length of the last word in a string.

/**
* @name lengthOfLastWord 
* @description Approach: Store words in an array and return the length of the last word.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function lengthOfLastWord(s) {
    let arr = []
    let word = ''
    for (let ch of s) {
        if (ch === ' ') {
            if (word) {
                arr.push(word)
                word = ''
            }
        } else {
            word += ch
        }
    }
    word && arr.push(word)
    return arr[arr.length - 1].length
}

// Test
const strs = "hello world"; // 5
console.log(lengthOfLastWord(strs));