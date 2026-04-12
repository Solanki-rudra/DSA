import { MinHeap } from "../../heap/MinHeap.js"

// Pattern: Graph, Shortest Path, Bellman-Ford Algorithm

// LeetCode Problem 787: Cheapest Flights Within K Stops
// In this problem, we are given a list of flights and their prices. We need to find the cheapest price to travel from a source city to a destination city with at most k stops.

/**
 * @name findCheapestPriceI
 * @description Approach: Breadth-First Search (BFS)
 * We can represent the flights as a directed graph. We will use BFS to find the shortest path from the source city to the destination city with at most k stops.
 * @timeComplexity O((V + E) * log V) where V is the number of cities and E is the number of flights
 * @spaceComplexity O(V + E) where V is the number of cities and E is the number of flights
 */
function findCheapestPriceI(n, flights, src, dst, k) {
    let adj = new Map()
    for (let [s, d, p] of flights) {
        if (!adj.has(s)) adj.set(s, [])
        adj.get(s).push([d, p])
    }
    let costs = Array(n).fill(Infinity)
    let q = [[0, src, 0]] // stp, src, prc
    costs[src] = 0
    let front = 0

    while (front < q.length) {
        let [stp, s, prc] = q[front++]
        if (stp > k) continue

        for (let [d, p] of adj.get(s) ?? []) {
            let newPrc = p + prc
            if (costs[d] > newPrc) {
                q.push([stp + 1, d, newPrc])
                costs[d] = newPrc
            }
        }
    }

    return costs[dst] === Infinity ? -1 : costs[dst]
}

/**
 * @name findCheapestPriceII
 * @description Approach: Breadth-First Search (BFS)
 * We can represent the flights as a directed graph. We will use BFS to find the shortest path from the source city to the destination city with at most k stops.
 * @timeComplexity O((V + E) * log V) where V is the number of cities and E is the number of flights
 * @spaceComplexity O(V + E) where V is the number of cities and E is the number of flights
 */
function findCheapestPriceII(n, flights, src, dst, k) {
    let adj = new Map()
    for (let [s, d, p] of flights) {
        if (!adj.has(s)) adj.set(s, [])
        adj.get(s).push([d, p])
    }

    let q = new MinHeap(Infinity, (a, b) => a[0] - b[0])
    let visited = Array.from({ length: n }, () => Array(k + 2).fill(Infinity))
    visited[src][0] = 0 // prc
    q.push([0, src, 0]) // prc, src, stp

    while (!q.isEmpty()) {
        let [prc, s, stp] = q.poll()
        if (s === dst) return prc
        if (stp > k) continue

        for (let [d, p] of adj.get(s) ?? []) {
            let newPrc = p + prc
            if (visited[d][stp + 1] > newPrc) {
                q.push([newPrc, d, stp + 1])
                visited[d][stp + 1] = newPrc
            }
        }
    }

    return -1
}

/**
 * @name findCheapestPriceIII
 * @description Approach: Bellman-Ford Algorithm
 * We can represent the flights as a directed graph. We will use Bellman-Ford algorithm to find the shortest path from the source city to the destination city with at most k stops.
 * @timeComplexity O(k * E) where E is the number of flights and k is the number of stops
 * @spaceComplexity O(V) where V is the number of cities
 */
function findCheapestPriceIII(n, flights, src, dst, k) {
    let costs = Array(n).fill(Infinity)
    costs[src] = 0
    for (let i = 0; i <= k; i++) {
        let temp = [...costs]
        for (let [s, d, p] of flights) {
            if (temp[d] > costs[s] + p) {
                temp[d] = costs[s] + p
            }
        }
        costs = temp
    }
    return costs[dst] === Infinity ? -1 : costs[dst]
}

let n = 4, flights = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], src = 0, dst = 3, k = 1

console.log(findCheapestPriceI(n, flights, src, dst, k))
console.log(findCheapestPriceII(n, flights, src, dst, k))
console.log(findCheapestPriceIII(n, flights, src, dst, k))