import { MaxHeap } from "../MaxHeap.js"

// Pattern: Heap, Max-Heap

// LeetCode Problem 621: Task Scheduler
// Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle. However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

// Return the least number of units of times that the CPU will take to finish all the given tasks. 

/**
* @name leastInterval
* @description  Approach: Count the frequency of each task and use a max heap to process tasks in descending order of frequency. For each cycle, process up to n+1 tasks (where n is the cooldown period). If there are fewer than n+1 tasks available, we still need to account for the cooldown period.
* @timeComplexity O(n log k)
* @spaceComplexity O(k)
*/
function leastInterval(tasks, n) {
    let freqMap = new Map()
    for (let task of tasks) {
        if (freqMap.has(task)) {
            freqMap.set(task, freqMap.get(task) + 1)
        } else {
            freqMap.set(task, 1)
        }
    }
    let queue = new MaxHeap()
    for (let [_, freq] of freqMap) {
        queue.push(freq)
    }

    let ans = 0
    while (!queue.isEmpty()) {
        let temp = []
        while (!queue.isEmpty() && temp.length < n + 1) {
            temp.push(queue.poll())
        }
        for (let n of temp) {
            if (--n > 0) {
                queue.push(n)
            }
        }
        queue.isEmpty() ? ans += temp.length : ans += n + 1
    }
    return ans
}

let tasks = ["A", "A", "A", "B", "B", "B"], n = 2

console.log(leastInterval(tasks, n)) 