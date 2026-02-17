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
MedianFinderBrute.prototype.addNum = function(num) {
    this.arr.push(num);
};
MedianFinderBrute.prototype.findMedian = function() {
    this.arr.sort((a, b) => a - b);
    if(this.arr.length % 2 === 0) {
        return (this.arr[this.arr.length / 2 - 1] + this.arr[this.arr.length / 2]) / 2;
    }else{
        return this.arr[Math.floor(this.arr.length / 2)];
    }
};

let medianFinderBrute = new MedianFinderBrute();
console.log(medianFinderBrute.addNum(1));    // arr = [1]
console.log(medianFinderBrute.addNum(2));   // arr = [1, 2]
console.log(medianFinderBrute.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
console.log(medianFinderBrute.addNum(3));    // arr[1, 2, 3]
console.log(medianFinderBrute.findMedian()); // return 2.0