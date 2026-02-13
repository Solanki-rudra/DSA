import { MaxHeap } from "../MaxHeap.js"

// Pattern: Heap, Max-Heap

// LeetCode Problem 973: K Closest Points to Origin
// To retrieve the k closest points to the origin (0, 0) from a list of points, we can use a max-heap to keep track of the k closest points encountered so far. We calculate the distance of each point from the origin and maintain a max-heap of size k. If the heap exceeds size k, we remove the point with the largest distance (the root of the max-heap). This way, at the end of processing all points, the heap will contain the k closest points.

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

/**
* @name kClosestOptimal
* @description  Approach: We can calculate the distance of each point from the origin and store it in an array. Then, we can sort this array based on the distances and return the first k points from the sorted array.
* @timeComplexity O(n log k) - We iterate through all n points and perform heap operations (push/poll) which take O(log k) time each.
* @spaceComplexity O(k) - We are maintaining a max-heap of size at most k.
*/
function kClosestOptimal(points, k) {
    let maxHeap = new MaxHeap(k, (a, b) => a[0] - b[0]) // Max-heap based on distance

    for (let point of points) {
        let dist = point[0] * point[0] + point[1] * point[1]

        if (maxHeap.getSize() < k) {
            maxHeap.push([dist, point])
        } else if (dist < maxHeap.peek()[0]) {
            maxHeap.poll()
            maxHeap.push([dist, point])
        }
    }

    let result = []
    while (!maxHeap.isEmpty()) {
        result.push(maxHeap.poll()[1])
    }

    return result
}

let points = [[3, 3], [5, -1], [-2, 4]], k = 2
console.log(kClosestBrute(points, k)) // [[3,3],[-2,4]]; 
console.log(kClosestOptimal(points, k)) // [[3,3],[-2,4]];