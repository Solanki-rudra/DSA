// Pattern: Stack, Design

// LeetCode Problem 716: Max Stack
// Design a stack that supports push, pop, top, peekMax, and popMax operations.

/**
* @name MaxStack
* @description Optimal Approach: Use two stacks - one for data, one for tracking max values. popMax is O(n) due to finding max not on top.
* @timeComplexity O(1) for push, pop, top, peekMax; O(n) for popMax
* @spaceComplexity O(n)
*/

var MaxStack = function() {
    this.stack = [];
    this.maxStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MaxStack.prototype.push = function(val) {
    let max = this.maxStack.length === 0 ? val : Math.max(val, this.maxStack[this.maxStack.length - 1]);
    this.stack.push(val);
    this.maxStack.push(max);
};

/**
 * @return {void}
 */
MaxStack.prototype.pop = function() {
    this.maxStack.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    return this.maxStack[this.maxStack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    let max = this.peekMax();
    let buffer = [];
    while(this.top() !== max) {
        buffer.push(this.pop());
    }
    this.pop();
    while(buffer.length > 0) {
        this.push(buffer.pop());
    }
    return max;
};

// Test
let maxStack = new MaxStack();
maxStack.push(5);
maxStack.push(1);
maxStack.push(5);
console.log(maxStack.top()); // 5
console.log(maxStack.peekMax()); // 5
console.log(maxStack.popMax()); // 5
console.log(maxStack.top()); // 1
console.log(maxStack.peekMax()); // 5