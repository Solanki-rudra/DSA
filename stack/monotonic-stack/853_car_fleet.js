
import { Stack } from "../Stack.js"

// Pattern: Stack, Monotonic Stack

// LeetCode Problem 853: Car Fleet
// There are n cars going to the same destination along a one-lane road. The destination is target miles away.
// You are given two integer arrays position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car.
// A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed.
// The distance between these two cars is ignored - they are considered as one car.
// Return the number of car fleets that will arrive at the destination.

/**
* @name carFleet
* @description Optimal Approach: Sort cars by position descending, use monotonic stack to count fleets by merging when a car catches up.
* @timeComplexity O(n log n)
* @spaceComplexity O(n)
*/
function carFleet(target, position, speed) {
    let times = []
    for(let i = 0; i<position.length; i++){
        times.push([position[i], (target - position[i])/speed[i]])
    }
    times.sort((a,b) => b[0] - a[0])
    let stack = new Stack()
    for(let [_, t] of times){
        if(stack.isEmpty() || stack.peek() < t){
            stack.push(t)
        }
    }
    return stack.length()
}


// Test
let target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]

console.log(carFleet(target, position, speed));