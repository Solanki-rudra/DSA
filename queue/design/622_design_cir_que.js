// Pattern: Queue, Design

// LeetCode Problem 622: Design Circular Queue
// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

/**
 * @name MyCircularQueue
 * @description Optimal Approach: Use array with head and tail pointers to implement a circular queue.
 * @timeComplexity O(1) for all operations
 * @spaceComplexity O(n)
 */

var MyCircularQueue = function (k) {
    this.size = 0
    this.cap = k
    this.data = []
    this.head = 0
    this.tail = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) return false
    this.data[this.tail] = value
    this.tail = (this.tail + 1) % this.cap
    this.size++
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) return false
    this.head = (this.head + 1) % this.cap
    this.size--
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    return this.isEmpty() ? -1 : this.data[this.head]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) return -1
    let ind = (this.tail - 1 + this.cap) % this.cap
    return this.data[ind]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.size === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.size === this.cap
};

var obj = new MyCircularQueue(3)
var param_1 = obj.enQueue(1)
var param_2 = obj.deQueue()
var param_3 = obj.Front()
var param_4 = obj.Rear()
var param_5 = obj.isEmpty()
var param_6 = obj.isFull()

console.log(param_1) // true
console.log(param_2) // true
console.log(param_3) // -1
console.log(param_4) // -1
console.log(param_5) // true
console.log(param_6) // false