// Pattern: Graph, traversal

// LeetCode Problem 277: Find the Celebrity
// In this problem, we are given a 2D grid representing relationships between people. We need to find a celebrity, if one exists.

/**
 * @name findCelebrity
 * @description  Approach: Two-Pointer Technique
 * The idea is to use a two-pointer technique to efficiently find the celebrity.
 * @timeComplexity O(n) where n is the number of people
 * @spaceComplexity O(1)
 */
function findCelebrity(grid, n) {
    let candidate = 0
    for(let i = 0; i < n; i++){
        if(i === candidate) continue
        if(knows(candidate, i)){
            candidate = i
        }
    }
    
    return isCeleb(candidate) ? candidate : -1
    
    function isCeleb(a){
        for(let i = 0; i < n; i++){
            if(i === a) continue
            
            if(grid[a][i]) return false
            
            if(!grid[i][a]) return false
        }
        return true
    }
    
    function knows(a, b){
        return grid[a][b]
    }
}

let grid = [
  [0, 0, 1, 0],
  [1, 0, 1, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 0]
]
let n = 4

console.log(findCelebrity(grid, n)) // Output: 2