import { MaxHeap } from "../MaxHeap.js"

// Pattern: Heap, Max-Heap

// LeetCode Problem 1046: Last Stone Weight
// You are given an array of integers stones where stones[i] is the weight of the ith stone.
// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

/**
* @name lastStoneWeightBrute
* @description  Approach: Sorting the array and simulating the process of smashing the stones together.
* @timeComplexity O(n^2 log n) - Sorting the array takes O(n log n) time, and we may need to perform this operation multiple times until only one stone is left.
* @spaceComplexity O(1) - We are modifying the input array in place.
*/
function lastStoneWeightBrute(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a)
        let x = stones.shift()
        let y = stones.shift()
        if (x !== y) {
            stones.push(x - y)
        }
    }
    return stones.length ? stones[0] : 0
}

/**
* @name lastStoneWeightOptimal
* @description  Approach: Using a Max Heap to efficiently retrieve the two heaviest stones and simulate the process of smashing them together.
* @timeComplexity O(n log n) - Building the Max Heap takes O(n) time, and each of the n-1 iterations involves two poll operations and one push operation, each of which takes O(log n) time.
* @spaceComplexity O(n) - We are creating a MaxHeap of size n.
*/
function lastStoneWeightOptimal(stones) {
    let maxHeap = new MaxHeap()
    for (let stone of stones) {
        maxHeap.push(stone)
    }
    while (maxHeap.getSize() > 1) {
        let x = maxHeap.poll()
        let y = maxHeap.poll()
        if (x !== y) {
            maxHeap.push(x - y)
        }
    }
    return maxHeap.isEmpty() ? 0 : maxHeap.peek()
}

let stones = [2, 7, 4, 1, 8, 1]

console.log(lastStoneWeightBrute(stones)); // Output: 1
console.log(lastStoneWeightOptimal(stones)); // Output: 1