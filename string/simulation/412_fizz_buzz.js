// Pattern: String, Greedy

// LeetCode Problem 412: Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/

/**
* @name fizzBuzz
* @description Approach: Iterate from 1 to n, check divisibility and append appropriate string to result array.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function fizzBuzz(n) {
    let ans = []
    for (let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            ans.push("FizzBuzz")
        }else if(i % 3 === 0){
            ans.push("Fizz")
        }else if(i % 5 === 0){
            ans.push("Buzz")
        }else{
            ans.push(String(i))
        }
    }
    return ans
}

// Test
const n = 15
console.log(fizzBuzz(n));