// Pattern: Graph, topological sort

// LeetCode Problem 210: Course Schedule II
// In this problem, we are given a number of courses and a list of prerequisites. We need to determine if it is possible to finish all courses and if so, return the order in which we can take the courses. This is a classic problem that can be solved using topological sorting of a directed graph.

/**
 * @name findOrderDfs
 * @description  Approach: Depth-First Search (DFS)
 * We can represent the courses and their prerequisites as a directed graph, where each course is a node and there is a directed edge from course A to course B if A is a prerequisite for B. We can then perform a depth-first search (DFS) on the graph to determine if there are any cycles (which would indicate that it is impossible to finish all courses) and to build the order of courses.
 * @timeComplexity O(V + E) where V is the number of courses and E is the number of prerequisites
 * @spaceComplexity O(V + E) where V is the number of courses and E is the number of prerequisites
 */
function findOrderDfs(numCourses, prerequisites) {
    let adjList = new Map()
    let visited = new Set()
    let visiting = new Set()
    let result = []
    for (let [a, b] of prerequisites) {
        if (!adjList.has(a)) adjList.set(a, [])
        adjList.get(a).push(b)
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return []
    }
    function dfs(i) {
        if (visiting.has(i)) return false
        if (visited.has(i)) return true
        visiting.add(i)
        let curr = adjList.get(i) || []
        for (let next of curr) {
            if (!dfs(next)) return false
        }
        visiting.delete(i)
        result.push(i)
        visited.add(i)
        return true
    }
    return result
}

/**
 * @name findOrderKahn
 * @description  Approach: Kahn's Algorithm (BFS)
 * We can represent the courses and their prerequisites as a directed graph, where each course is a node and there is a directed edge from course A to course B if A is a prerequisite for B. We can then perform a breadth-first search (BFS) on the graph to determine if there are any cycles (which would indicate that it is impossible to finish all courses) and to build the order of courses.
 * @timeComplexity O(V + E) where V is the number of courses and E is the number of prerequisites
 * @spaceComplexity O(V + E) where V is the number of courses and E is the number of prerequisites
 */
function findOrderKahn(numCourses, prerequisites) {
    let adjList = new Map()
    let indegree = Array(numCourses).fill(0)

    for (let [a, b] of prerequisites) {
        if (!adjList.has(b)) adjList.set(b, [])
        adjList.get(b).push(a)
        indegree[a]++
    }

    let q = []
    let result = []

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) q.push(i)
    }

    while (q.length) {
        let course = q.shift()
        result.push(course)

        for (let next of adjList.get(course) || []) {
            indegree[next]--
            if (indegree[next] === 0) q.push(next)
        }
    }

    return result.length === numCourses ? result : []
}

let numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]

console.log(findOrderDfs(numCourses, prerequisites))
console.log(findOrderKahn(numCourses, prerequisites))