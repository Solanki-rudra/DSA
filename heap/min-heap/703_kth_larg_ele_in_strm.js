// Pattern: Heap, Min-Heap

// LeetCode Problem 703: Kth Largest Element in a Stream
// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Implement KthLargest class:
// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

var KthLargest = function (k, nums) {
    this.k = k
    this.nums = nums
};

var KthLargestOptimal = function (k, nums) {
    this.k = k
    this.nums = []
    for (let num of nums) {
        if (this.nums.length < this.k) {
            this.nums.push(num)
            this._heapifyUp(this.nums.length - 1)
        } else if (num > this.nums[0]) {
            this.nums[0] = num
            this._heapifyDown(0)
        }
    }
};

/**
* @name addBrute
* @description  Approach: Find max element k times by repeatedly searching and removing the largest element.
* @timeComplexity O(k * n)
* @spaceComplexity O(n)
*/
KthLargest.prototype.addBrute = function (val) {
    this.nums.push(val)
    let dummy = [...this.nums]
    let dummyK = this.k
    while (dummyK > 1) {
        let max = Math.max(...dummy)
        dummy.splice(dummy.indexOf(max), 1)
        dummyK--
    }
    return Math.max(...dummy)
};


/**
* @name addBetter
* @description  Approach: Sort the array in descending order and return the element at index k-1.
* @timeComplexity O(n log n)
* @spaceComplexity O(1)
*/
KthLargest.prototype.addBetter = function (val) {
    this.nums.push(val)
    this.nums.sort((a, b) => b - a)
    return this.nums[this.k - 1]
};


/**
* @name addOptimal
* @description  Approach: Use a min-heap with capacity k to maintain the k largest elements. The root is the kth largest. When adding a new value, if the heap has less than k elements, push it. If the new value is greater than the root, replace the root and heapify down.
* @timeComplexity O(n log k)
* @spaceComplexity O(k)
*/
KthLargestOptimal.prototype.addOptimal = function (val) {
    if (this.nums.length < this.k) {
        this.nums.push(val)
        this._heapifyUp(this.nums.length - 1)
    } else if (val > this.nums[0]) {
        this.nums[0] = val
        this._heapifyDown(0)
    }
    return this.nums[0]
}

KthLargestOptimal.prototype._heapifyDown = function (index) {
    while (true) {
        let left = 2 * index + 1
        let right = 2 * index + 2
        let smallest = index
        if (left < this.nums.length && this.nums[left] < this.nums[smallest]) {
            smallest = left
        }
        if (right < this.nums.length && this.nums[right] < this.nums[smallest]) {
            smallest = right
        }
        if (smallest === index) break
        [this.nums[index], this.nums[smallest]] = [this.nums[smallest], this.nums[index]]
        index = smallest
    }
}

KthLargestOptimal.prototype._heapifyUp = function (index) {
    while (index > 0) {
        let parent = Math.floor((index - 1) / 2)
        if (this.nums[index] >= this.nums[parent]) break
        [this.nums[parent], this.nums[index]] = [this.nums[index], this.nums[parent]]
        index = parent
    }
}

let kthLargestBrute = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargestBrute.addBrute(3)); // return 4
console.log(kthLargestBrute.addBrute(5)); // return 5
console.log(kthLargestBrute.addBrute(10)); // return 5
console.log(kthLargestBrute.addBrute(9)); // return 8
console.log(kthLargestBrute.addBrute(4)); // return 8 

let kthLargestBetter = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargestBetter.addBetter(3)); // return 4
console.log(kthLargestBetter.addBetter(5)); // return 5
console.log(kthLargestBetter.addBetter(10)); // return 5
console.log(kthLargestBetter.addBetter(9)); // return 8
console.log(kthLargestBetter.addBetter(4)); // return 8

let kthLargestOptimal = new KthLargestOptimal(3, [4, 5, 8, 2]);
console.log(kthLargestOptimal.addOptimal(3)); // return 4
console.log(kthLargestOptimal.addOptimal(5)); // return 5
console.log(kthLargestOptimal.addOptimal(10)); // return 5
console.log(kthLargestOptimal.addOptimal(9)); // return 8
console.log(kthLargestOptimal.addOptimal(4)); // return 8