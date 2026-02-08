// Pattern: Queue, Design

import { Stack } from "../../stack/Stack.js";

// LeetCode Problem 232: Implement Queue using Stacks
// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

/**
 * @name MyQueue
 * @description Optimal Approach: Use two stacks (s1 for input, s2 for output) to implement a FIFO queue. Lazy transfer maintains FIFO order.
 * @timeComplexity O(1) amortized for all operations
 * @spaceComplexity O(n)
 */

var MyQueue = function() {
    this.s1 = new Stack()
    this.s2 = new Stack()
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while(!this.s1.isEmpty()){
        this.s2.push(this.s1.pop())
    }
    this.s1.push(x)
    while(!this.s2.isEmpty()){
        this.s1.push(this.s2.pop())
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.s1.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.s1.peek()
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.isEmpty()
};

var obj = new MyQueue()
let x = 1
obj.push(x)
var param_2 = obj.pop()
var param_3 = obj.peek()
var param_4 = obj.empty()

console.log(param_2) // 1
console.log(param_3) // undefined (queue is empty after pop)
console.log(param_4) // true (queue is empty)