import { MinHeap } from '../MinHeap.js'
import { MaxHeap } from '../MaxHeap.js'

// Pattern: Heap, Two Heaps

// LeetCode Problem 295: Find Median from Data Stream
// To find the median from a data stream, we can use two heaps: a max heap to store the smaller half of the numbers and a min heap to store the larger half of the numbers. This way, we can easily access the median by looking at the top elements of both heaps.

/**
* @name MedianFinderBrute
* @description  Approach: For each new number added, we can store it in an array and sort the array to find the median. This approach is straightforward but inefficient for large data streams.
* @timeComplexity O(n log n)
* @spaceComplexity O(n)
*/
function MedianFinderBrute() {
    this.arr = [];
}
MedianFinderBrute.prototype.addNum = function (num) {
    this.arr.push(num);
};
MedianFinderBrute.prototype.findMedian = function () {
    this.arr.sort((a, b) => a - b);
    if (this.arr.length % 2 === 0) {
        return (this.arr[this.arr.length / 2 - 1] + this.arr[this.arr.length / 2]) / 2;
    } else {
        return this.arr[Math.floor(this.arr.length / 2)];
    }
};

/**
* @name MedianFinderOptimal
* @description  Approach: We can maintain two heaps: a max heap for the smaller half of the numbers and a min heap for the larger half. When we add a new number, we compare it with the top of the max heap to decide which heap to add it to. After adding, we balance the heaps so that their sizes differ by at most one. To find the median, we check the sizes of the heaps and return the appropriate value.
* @timeComplexity O(log n)
* @spaceComplexity O(n)
*/
function MedianFinderOptimal() {
    this.max = new MaxHeap();
    this.min = new MinHeap();
}
MedianFinderOptimal.prototype.addNum = function (num) {
    if (this.max.getSize() === 0 || num <= this.max.peek()) {
        this.max.push(num)
    } else {
        this.min.push(num)
    }
    if (this.max.getSize() > this.min.getSize() + 1) {
        this.min.push(this.max.poll());
    } else if (this.min.getSize() > this.max.getSize()) {
        this.max.push(this.min.poll());
    }
};
MedianFinderOptimal.prototype.findMedian = function () {
    return this.max.getSize() > this.min.getSize() ? this.max.peek() : (this.max.peek() + this.min.peek()) / 2;
};



let medianFinderBrute = new MedianFinderBrute();
console.log(medianFinderBrute.addNum(1));    // arr = [1]
console.log(medianFinderBrute.addNum(2));   // arr = [1, 2]
console.log(medianFinderBrute.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
console.log(medianFinderBrute.addNum(3));    // arr[1, 2, 3]
console.log(medianFinderBrute.findMedian()); // return 2.0

let medianFinderOptimal = new MedianFinderOptimal();
console.log(medianFinderOptimal.addNum(1));    // max = [1], min = []
console.log(medianFinderOptimal.addNum(2));   // max = [1], min = [2]
console.log(medianFinderOptimal.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
console.log(medianFinderOptimal.addNum(3));    // max = [2, 1], min = [3]
console.log(medianFinderOptimal.findMedian()); // return 2.0