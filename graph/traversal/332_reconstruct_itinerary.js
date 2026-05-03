// Pattern: Graph, traversal

// LeetCode Problem 332: Reconstruct Itinerary
// In this problem, we are given a list of tickets, where each ticket is represented as a pair of strings [from, to]. We need to reconstruct the itinerary in the form of a list of strings.

/**
 * @name findItinerary
 * @description  Approach: Depth-First Search (DFS)
 * The idea is to use a depth-first search to traverse the tickets and identify all regions of 'O' that are not connected to the border. These regions are then converted to 'X'.
 * @timeComplexity O(m * n) where m and n are the dimensions of the tickets
 * @spaceComplexity O(m * n) for the visited matrix and the recursion stack in the worst case
 */
function findItinerary(tickets) {
    let adj = new Map()
    for (let [from, to] of tickets) {
        if (!adj.has(from)) adj.set(from, [])
        adj.get(from).push(to)
    }
    for (let [from, list] of adj) {
        list.sort().reverse()
    }
    let result = []
    function dfs(dep) {
        let arvls = adj.get(dep)
        while (arvls && arvls.length > 0) {
            let next = arvls.pop()
            dfs(next)
        }
        result.push(dep)
    }
    dfs('JFK')
    return result.reverse()
}

let tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]

console.log(findItinerary(tickets))