
import { Stack } from "../Stack.js"

// Pattern: Stack, Expression Evaluation

// LeetCode Problem 150: Evaluate Reverse Polish Notation
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
// Note that division between two integers should truncate toward zero.

/**
* @name evalRPNBrute
* @description Iterative Approach: Process tokens iteratively, replacing operator and operands with result.
* @timeComplexity O(n^2)
* @spaceComplexity O(1) extra
*/
function evalRPNBrute(tokens) {
    let i = 0
    while(tokens.length > 1){
        if(['+','-','*','/'].includes(tokens[i])){
            let a = Number(tokens[i-2])
            let b = Number(tokens[i-1])
            let total = applyOperator(a, b , tokens[i])
            tokens.splice(i - 2, 3, total.toString())
            i = i - 2
        }else{
            i++
        }
    }
    return Number(tokens[i])
}

/**
* @name evalRPNOptimal
* @description Stack Approach: Use stack to evaluate RPN expression.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function evalRPNOptimal(tokens) {
    let stack = new Stack()
    for(let i=0; i<tokens.length; i++){
        if(['+','-','*','/'].includes(tokens[i])){
            let b = stack.pop()
            let a = stack.pop()
            stack.push(String(applyOperator(Number(a),Number(b), tokens[i])))
        }else{
            stack.push(tokens[i])
        }
    }
    return Number(stack.peek())
}


// Test
let tokens = ["2","1","+","3","*"]

console.log(evalRPNBrute(tokens));
console.log(evalRPNOptimal(tokens));


function applyOperator(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return Math.trunc(a / b);
    }
}