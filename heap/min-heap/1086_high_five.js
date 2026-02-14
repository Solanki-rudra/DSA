import { MinHeap } from "../MinHeap.js"

// Pattern: Heap, Max-Heap

// LeetCode Problem 1086: High Five
// Given a list of scores of different students, items, where items[i] = [IDi, scorei] represents one score from a student with IDi, calculate each student's top five average. Return the answer as an array of pairs result, where result[j] = [IDj, topFiveAveragej] represents the student with IDj and their top five average. Sort result by IDj in increasing order.

/**
* @name highFiveBrute
* @description  Approach: Sorting the array and simulating the process of calculating the top five average for each student.
* @timeComplexity O(n log n)
* @spaceComplexity O(n)
*/
function highFiveBrute(items) {
    let scoreMap = new Map()
    for (let [id, score] of items) {
        if (!scoreMap.has(id)) {
            scoreMap.set(id, [])
        }
        scoreMap.get(id).push(score)
    }
    let result = []
    for (let [id, scores] of scoreMap) {
        scores.sort((a, b) => b - a)
        let topFiveAverage = Math.floor(scores.slice(0, 5).reduce((a, b) => a + b, 0) / 5)
        result.push([id, topFiveAverage])
    }
    result.sort((a, b) => a[0] - b[0])
    return result
}

/**
* @name highFiveOptimal
* @description  Approach: Using a Max Heap to efficiently retrieve the top five scores for each student and calculate their average.
* @timeComplexity O(n log 5)
* @spaceComplexity O(n)
*/
function highFiveOptimal(items) {
    let scoreMap = new Map()
    for (let [id, score] of items) {
        if (!scoreMap.has(id)) {
            scoreMap.set(id, new MinHeap(5))
            scoreMap.get(id).push(score)
        } else {
            scoreMap.get(id).push(score)
        }
    }
    let result = []
    for (let [id, minHeap] of scoreMap) {
        let sum = 0
        for (let i = 0; i < 5; i++) {
            sum += minHeap.poll()
        }
        result.push([id, Math.floor(sum / 5)])
    }
    result.sort((a, b) => a[0] - b[0])
    return result
}

let items = [
    [1, 91], [1, 92], [2, 93], [2, 97], [1, 60],
    [2, 77], [1, 65], [1, 87], [1, 100], [2, 100], [2, 76]
]


console.log(highFiveBrute(items)); // Output: 1
console.log(highFiveOptimal(items)); // Output: 1