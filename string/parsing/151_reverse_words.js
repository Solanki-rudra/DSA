// Pattern: String, Parsing

// LeetCode Problem 151: Reverse Words in a String
// Write a function to reverse the words in a string.

/**
* @name reverseWords 
* @description Approach: Parse words into an array, reverse the array, and join with a space.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function reverseWords(s) {
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
    return arr.reverse().join(' ')
}

// Test
const strs = "hello world";  // "world hello"
console.log(reverseWords(strs));