// Pattern: String, Backtracking

// LeetCode Problem 22: Generate Parentheses
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
* @name generateParenthesis
* @description Approach: Use backtracking to generate all valid combinations.
* @timeComplexity O(m * n) where m is the number of valid combinations
* @spaceComplexity O(n) for recursion stack
*/
function generateParenthesis(n) {
    let ans = []
    function backtracking(open, close, str) {
        if (n === open && open === close) {
            ans.push(str)
            return
        }
        if (open < n) {
            backtracking(open + 1, close, str + '(')
        }
        if (close < open) {
            backtracking(open, close + 1, str + ')')
        }
    }
    backtracking(0, 0, "")
    return ans
}


// Test
console.log(generateParenthesis(3));
console.log(generateParenthesis(1));