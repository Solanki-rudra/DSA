// Pattern: Graph, topological sort

// LeetCode Problem 207: Course Schedule
// In this problem, we are given a list of courses and their prerequisites. We need to determine if it is possible to finish all courses.

/**
 * @name canFinish
 * @description  Approach: Depth-First Search (DFS)
 * We can represent the courses and their prerequisites as a directed graph. We will use DFS to detect if there is a cycle in the graph. If there is a cycle, it means that it is not possible to finish all courses. We will maintain two sets: one for visited nodes and another for safe nodes (nodes that have been fully processed). If we encounter a node that is already in the visited set, it means we have found a cycle. If we encounter a node that is in the safe set, it means we have already processed it and can skip it.
 * @timeComplexity O(V + E) where V is the number of courses and E is the number of prerequisites
 * @spaceComplexity O(V + E) where V is the number of courses and E is the number of prerequisites
 */
function canFinish(numCourses, prerequisites) {
    let adjList = new Map()
    let visited = new Set()
    let safe = new Set()
    for(let [a, b] of prerequisites){
        if(!adjList.has(a)) adjList.set(a, [])
        adjList.get(a).push(b)
    }

    function dfs(i){
        if(visited.has(i)) return false
        if(safe.has(i)) return true
        visited.add(i)
        let curr = adjList.get(i) || []
        for(let next of curr){
            if(!dfs(next)) return false
        }
        visited.delete(i)
        safe.add(i)
        return true
    }

    for(let i = 0; i<numCourses; i++){
        if(!dfs(i)) return false
    }
    return true
}

let numCourses = 2, prerequisites = [[1, 0]]

console.log(canFinish(numCourses, prerequisites))