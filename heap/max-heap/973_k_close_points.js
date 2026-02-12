import { MaxHeap } from "../MaxHeap.js"

// Pattern: Heap, Max-Heap

// LeetCode Problem 973: K Closest Points to Origin
// Given an array of integers stones where stones[i] is the weight of the ith stone, we are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
// If x == y, both stones are totally destroyed; 
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end of the game, there is at most one stone left. Return the weight of the last remaining stone. If there are no stones left, return 0.

/**
* @name kClosestBrute
* @description  Approach: We can calculate the distance of each point from the origin and store it in an array. Then, we can sort this array based on the distances and return the first k points from the sorted array.
* @timeComplexity O(n log n) - We need to sort the array of distances, which takes O(n log n) time. The rest of the operations (calculating distances and retrieving the k closest points) take O(n) time.
* @spaceComplexity O(n) - We are creating a new array to store the distances and their indices.
*/
function kClosestBrute(points, k) {
    let distArr = []
    for (let i = 0; i < points.length; i++) {
        let point = points[i]
        let dist = Math.sqrt(point[0] * point[0] + point[1] * point[1])
        distArr.push([i, dist])
    }
    distArr.sort((a, b) => a[1] - b[1])
    let result = []
    for (let i = 0; i < k; i++) {
        result.push(points[distArr[i][0]])
    }
    return result
}
let points = [[3, 3], [5, -1], [-2, 4]], k = 2
console.log(kClosestBrute(points, k)) // [[3,3],[-2,4]]; 