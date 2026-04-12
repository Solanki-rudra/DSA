import { MinHeap } from "../../heap/MinHeap.js"

// Pattern: Graph, Shortest Path, Dijkstra's Algorithm

// LeetCode Problem 743: Network Delay Time
// In this problem, we are given a list of courses and their prerequisites. We need to determine if it is possible to finish all courses.

/**
 * @name networkDelayTime
 * @description  Approach: Dijkstra's Algorithm
 * We can represent the courses and their prerequisites as a directed graph. We will use Dijkstra's algorithm to find the shortest path from the starting node to all other nodes. If there is a node that is unreachable, it means that it is not possible to finish all courses.
 * @timeComplexity O((V + E) * log V) where V is the number of courses and E is the number of prerequisites
 * @spaceComplexity O(V + E) where V is the number of courses and E is the number of prerequisites
 */
function networkDelayTime(times, n, k) {
    let adjList = new Map()
    let minPath = Array(n + 1).fill(Infinity)

    for (let [u, v, w] of times) {
        if (!adjList.has(u)) adjList.set(u, [])
        adjList.get(u).push([w, v])
    }

    let q = new MinHeap(Infinity, (a, b) => a[0] - b[0])
    q.push([0, k])
    minPath[k] = 0

    while (!q.isEmpty()) {
        let [w, v] = q.poll()

        if (w > minPath[v]) continue

        for (let [time, node] of adjList.get(v) ?? []) {
            if (w + time < minPath[node]) {
                minPath[node] = w + time
                q.push([w + time, node])
            }
        }
    }

    let ans = 0
    for (let i = 1; i <= n; i++) {
        if (minPath[i] === Infinity) return -1
        ans = Math.max(ans, minPath[i])
    }

    return ans
}

let times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2

console.log(networkDelayTime(times, n, k))