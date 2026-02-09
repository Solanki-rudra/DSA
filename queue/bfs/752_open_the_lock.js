import { Queue } from "../Queue.js"

// Pattern: Queue, BFS

// LeetCode Problem 752: Open the Lock
// You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.
// The lock initially starts at '0000', a string representing the state of the 4 wheels.
// You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.
// Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

/**
* @name openLock
* @description  Approach: Breadth-First Search (BFS)
We can model the lock as a graph where each node represents a lock state (a 4-digit string), and edges connect nodes that can be reached by a single move (turning one wheel up or down). We will use BFS to explore the graph level by level, starting from the initial state '0000'. We will maintain a queue to keep track of the current states to explore and a set to keep track of visited states to avoid cycles. If we reach the target state, we return the number of moves taken. If we exhaust all possibilities without reaching the target, we return -1.
* @timeComplexity O(N) where N is the number of nodes in the search space maximum 80000
* @spaceComplexity O(N) where N is the number of nodes in the search space maximum 80000
*/
function openLock(deadends, target) {
    if (target === '0000') return 0
    let deadSet = new Set(deadends)
    let seenSet = new Set(['0000'])
    let queue = new Queue()
    queue.push('0000')
    let steps = 0
    if (deadSet.has('0000')) return -1
    while (!queue.isEmpty()) {
        let size = queue.length()
        for (let i = 0; i < size; i++) {
            let curr = queue.pop()
            if (curr === target) return steps
            for (let j = 0; j < 4; j++) {
                let digit = Number(curr[j])
                let upArr = curr.split('')
                upArr[j] = (digit + 1) % 10
                let up = upArr.join('')
                if (!deadSet.has(up) && !seenSet.has(up)) {
                    if (up === target) return steps + 1
                    queue.push(up)
                    seenSet.add(up)
                }
                let downArr = curr.split('')
                downArr[j] = (digit + 9) % 10
                let down = downArr.join('')
                if (!deadSet.has(down) && !seenSet.has(down)) {
                    if (down === target) return steps + 1
                    queue.push(down)
                    seenSet.add(down)
                }
            }
        }
        steps++
    }
    return -1
}

let deadends = ["0201", "0101", "0102", "1212", "2002"], target = "0202"

console.log(openLock(deadends, target)); // Output: 6