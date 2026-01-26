
import { Stack } from "../Stack.js"

// Pattern: Stack, Validation

// LeetCode Problem 1249: Minimum Remove to Make Valid Parentheses
// Given a string s of '(' , ')' and lowercase English characters.
// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any such string.

/**
* @name minRemoveToMakeValid
* @description Approach: Use a stack to validate parentheses.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function minRemoveToMakeValid(s) {
    let removeInd = new Set()
    let stack = new Stack()
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(i)
        else if (s[i] === ')') {
            if (!stack.isEmpty()) {
                stack.pop()
            } else {
                removeInd.add(i)
            }
        }
    }
    while (!stack.isEmpty()) {
        removeInd.add(stack.pop())
    }
    let ans = ''
    for (let j = 0; j < s.length; j++) {
        if (!removeInd.has(j)) {
            ans += s[j]
        }
    }
    return ans
}


// Test
let s = "lee(t(c)o)de)"

console.log(minRemoveToMakeValid(s));