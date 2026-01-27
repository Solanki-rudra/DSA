
import { Stack } from "../Stack.js"

// Pattern: Stack, Validation

// LeetCode Problem 32: Longest Valid Parentheses
// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

/**
* @name longestValidParenthesesBrute
* @description Approach: Brute force - check all possible substrings starting from '(' and validate using stack.
* @timeComplexity O(n^3)
* @spaceComplexity O(n)
*/
function longestValidParenthesesBrute(s) {
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') continue
        let str = s[i]
        for (let j = i + 1; j < s.length; j++) {
            str += s[j]
            if (isValid(str)) ans = Math.max(ans, str.length)
        }
    }
    return ans
}

/**
* @name longestValidParenthesesOptimal
* @description Approach: Use a stack to validate parentheses.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function longestValidParenthesesOptimal(s) {
    let ans = 0
    let stack = new Stack()
    stack.push(-1)
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else {
            stack.pop()
            if (stack.isEmpty()) {
                stack.push(i)
            } else {
                ans = Math.max(ans, i - stack.peek())
            }
        }
    }
    return ans
}


// Test
let s = ")()())"

console.log(longestValidParenthesesBrute(s));
console.log(longestValidParenthesesOptimal(s));


function isValid(str) {
    let stack = new Stack()
    for (let s of str) {
        if (stack.peek() === '(' && s === ')') {
            stack.pop()
        } else {
            stack.push(s)
        }
    }
    return stack.isEmpty()
}