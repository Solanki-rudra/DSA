
import { Stack } from "../Stack.js"

// Pattern: Stack, Validation

// LeetCode Problem 20: Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

/**
* @name isValid
* @description Approach: Use a stack to validate parentheses.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function isValid(s) {
    let hashMap = new Map()
    hashMap.set(')', '(')
    hashMap.set('}', '{')
    hashMap.set(']', '[')
    let stack = new Stack()
    for(let i = 0; i<s.length; i++){
        if(hashMap.has(s[i])){
            if(stack.pop() !== hashMap.get(s[i])) return false
        }else{
            stack.push(s[i])
        }
    }
    return stack.length() === 0
}


// Test
console.log(isValid("()[]{}"));
console.log(isValid("([)]"));