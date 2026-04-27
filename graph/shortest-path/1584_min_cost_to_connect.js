import { MinHeap } from "../../heap/MinHeap.js"

// Pattern: Graph, Shortest Path, Minimum Spanning Tree (MST), Prim's Algorithm

// LeetCode Problem 1584: Min Cost to Connect Points
// In this problem, we are given a list of points. We need to find the minimum cost to connect all the points.

/**
 * @name minCostConnectPointsI
 * @description Approach: Prim's Algorithm using Min-Heap
 * We can represent the points as a graph where each point is a node and the cost to connect two points is the Manhattan distance between them. We will use Prim's algorithm to find the minimum cost to connect all the points.
 * @timeComplexity O((V + E) * log V) where V is the number of points and E is the number of edges
 * @spaceComplexity O(V + E) where V is the number of points and E is the number of edges
 */
function minCostConnectPointsI(points) {
    let n = points.length
    let pq = new MinHeap(Infinity, (a, b) => a[0] - b[0])
    let visited = new Set()
    let res = 0
    pq.push([0, 0])
    while (!pq.isEmpty() && visited.size < n) {
        let [dist, ind] = pq.poll()
        if (visited.has(ind)) continue
        visited.add(ind)
        res += dist
        for (let i = 0; i < n; i++) {
            if (ind === i || visited.has(i)) continue
            pq.push([Math.abs(points[ind][0] - points[i][0]) + Math.abs(points[ind][1] - points[i][1]), i])
        }
    }
    return res
}

/**
 * @name minCostConnectPointsII
 * @description Approach: Prim's Algorithm without Min-Heap
 * We can represent the points as a graph where each point is a node and the cost to connect two points is the Manhattan distance between them. We will use Prim's algorithm to find the minimum cost to connect all the points.
 * @timeComplexity O(V^2) where V is the number of cities
 * @spaceComplexity O(V) where V is the number of cities
 */
function minCostConnectPointsII(points) {
    let n = points.length
    let cost = 0
    let visited = Array(n).fill(false)
    let dist = Array(n).fill(Infinity)
    dist[0] = 0
    for (let i = 0; i < n; i++) {
        let min = Infinity
        let next = -1
        for (let j = 0; j < n; j++) {
            if (!visited[j] && dist[j] < min) {
                next = j
                min = dist[j]
            }
        }
        visited[next] = true
        cost += min
        for (let k = 0; k < n; k++) {
            if (!visited[k]) {
                let d = Math.abs(points[k][0] - points[next][0]) + Math.abs(points[k][1] - points[next][1])
                dist[k] = Math.min(dist[k], d)
            }
        }
    }
    return cost
}

let points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]

console.log(minCostConnectPointsI(points))
console.log(minCostConnectPointsII(points))