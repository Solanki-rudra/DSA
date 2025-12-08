// Pattern: Array, Sliding Window

// LeetCode Problem 121: Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize profit by picking one buy day and one later sell day.
// If no profit is possible, return 0.

/**
 * @name maxProfitBrute
 * @description Brute Force Approach: Try every buy–sell pair and track max difference.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(1)
 */
function maxProfitBrute(prices) {
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            profit = Math.max(profit, prices[j] - prices[i])
        }
    }
    return profit
}

/**
 * @name maxProfitOptimal
 * @description Optimal Approach: Track minimum price while scanning and calculate best sell profit.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function maxProfitOptimal(prices) {
    let profit = 0
    let min = prices[0]

    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - min)
        min = Math.min(min, prices[i])
    }

    return profit
}

// Test
const prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfitBrute(prices))      // 5
console.log(maxProfitOptimal(prices))    // 5