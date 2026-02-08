// Pattern: Queue, Design

import { Queue } from "../Queue.js";

// LeetCode Problem 225: Implement Stack using Queues
// Implement a last in first out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

/**
 * @name MyStack
 * @description Optimal Approach: Use two queues (q1 for input, q2 for output) to implement a LIFO stack. Lazy transfer maintains LIFO order.
 * @timeComplexity O(1) amortized for all operations
 * @spaceComplexity O(n)
 */

var MyStack = function () {
    this.q1 = new Queue()
    this.q2 = new Queue()
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    while (!this.q1.isEmpty()) {
        this.q2.push(this.q1.pop())
    }
    this.q1.push(x)
    while (!this.q2.isEmpty()) {
        this.q1.push(this.q2.pop())
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    return this.q1.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.q1.peek();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.isEmpty();
};

let myStack = new MyStack();
myStack.push(1);
myStack.push(2);
let param_2 = myStack.top(); // return 2
let param_3 = myStack.pop(); // return 2
let param_4 = myStack.empty(); // return False


console.log(param_2) // 2
console.log(param_3) // 2
console.log(param_4) // false