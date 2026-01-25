
import { Stack } from "../Stack.js"

// Pattern: Stack, Monotonic Stack

// LeetCode Problem 739: Daily Temperatures
// Given a list of daily temperatures, return an array where each element represents the number of days until a warmer temperature occurs.

/**
* @name dailyTemperaturesBrute
* @description Brute Force Approach: For each day, scan forward to find the next warmer day.
* @timeComplexity O(n^2)
* @spaceComplexity O(1)
*/
function dailyTemperaturesBrute(temperatures) {
    let result = []
    for (let i = 0; i < temperatures.length; i++) {
        let next = i + 1
        while (temperatures[next] !== undefined) {
            if (temperatures[i] < temperatures[next]) {
                result[i] = next - i
                break
            }
            next++
        }
        if (temperatures[next] === undefined) {
            result[i] = 0
        }
    }
    return result
}

/**
* @name dailyTemperaturesOptimal
* @description Optimal Approach: Use a monotonic decreasing stack to track indices and compute next warmer days efficiently.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function dailyTemperaturesOptimal(temperatures) {
    let n = temperatures.length
    if (n < 1) return []
    let stack = new Stack()
    let ans = Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        while (!stack.isEmpty() && temperatures[stack.peek()] < temperatures[i]) {
            let ind = stack.pop()
            ans[ind] = i - ind
        }
        stack.push(i)
    }
    return ans
}


// Test
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

console.log(dailyTemperaturesBrute(temperatures));
console.log(dailyTemperaturesOptimal(temperatures));