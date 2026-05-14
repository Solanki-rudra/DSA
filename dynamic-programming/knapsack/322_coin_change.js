// Pattern: Dynamic Programming, Knapsack (Unbounded)

// LeetCode Problem 322: Coin Change
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

/**
 * @name coinChange1
 * @description Approach: Recursion (Brute Force)
 * The idea is to explore all possible combinations of coins to make up the amount. We can either take a coin or not take it. Since we have an infinite supply of each coin, if we take a coin, we can still take it again (unbounded knapsack).
 * @timeComplexity O(S^n) where S is the amount and n is the number of coins, in the worst case where we explore all possible paths.
 * @spaceComplexity O(amount / min(coins)) for the recursion stack in the worst case.
 */
function coinChange1(coins, amount) {
    function dfs(ind, target) {
        if (ind === 0) {
            if (target % coins[ind] === 0) return target / coins[ind]
            else return Infinity
        }

        let notTake = 0 + dfs(ind - 1, target)
        let take = Infinity
        if (coins[ind] <= target) take = 1 + dfs(ind, target - coins[ind])

        return Math.min(notTake, take)
    }
    let ans = dfs(coins.length - 1, amount)
    return ans === Infinity ? -1 : ans
}

/**
 * @name coinChange2
 * @description Approach: Memoization / Dynamic Programming
 * We optimize the recursive approach by storing the results of overlapping subproblems in a 2D array.
 * @timeComplexity O(n * amount) where n is the number of coins and amount is the target amount. We solve at most n * amount unique subproblems.
 * @spaceComplexity O(n * amount) for the 2D memoization array + O(amount / min(coins)) for the recursion stack.
 */
function coinChange2(coins, amount) {
    let n = coins.length
    let dp = Array.from({ length: n }, () => Array(amount + 1).fill(-1))
    function dfs(ind, target) {
        if (ind === 0) {
            if (target % coins[ind] === 0) return target / coins[ind]
            else return Infinity
        }

        if (dp[ind][target] !== -1) return dp[ind][target]

        let notTake = 0 + dfs(ind - 1, target)
        let take = Infinity
        if (coins[ind] <= target) take = 1 + dfs(ind, target - coins[ind])

        dp[ind][target] = Math.min(notTake, take)

        return dp[ind][target]
    }
    let ans = dfs(n - 1, amount)
    return ans === Infinity ? -1 : ans
}

/**
 * @name coinChange3
 * @description Approach: Tabulation (Bottom-Up Dynamic Programming)
 * We build a 2D table iteratively from the base cases up to the target amount.
 * @timeComplexity O(n * amount) where n is the number of coins and amount is the target amount. We iterate through all states.
 * @spaceComplexity O(n * amount) for the 2D tabulation array.
 */
function coinChange3(coins, amount) {
    let n = coins.length

    let dp = Array.from(
        { length: n },
        () => Array(amount + 1).fill(Infinity)
    )
    for (let target = 0; target <= amount; target++) {
        if (target % coins[0] === 0) {
            dp[0][target] = target / coins[0]
        }
    }

    for (let ind = 1; ind < n; ind++) {
        for (let target = 0; target <= amount; target++) {
            let notTake = dp[ind - 1][target]
            let take = Infinity
            if (coins[ind] <= target) {
                take = 1 + dp[ind][target - coins[ind]]
            }
            dp[ind][target] = Math.min(notTake, take)
        }
    }
    let ans = dp[n - 1][amount]
    return ans === Infinity ? -1 : ans
}

/**
 * @name coinChange4
 * @description Approach: Space-Optimized Tabulation (1D Dynamic Programming)
 * We can optimize the space complexity of the tabulation approach by using a 1D array since the current state only depends on the previous row (or the same row for unbounded knapsack).
 * @timeComplexity O(n * amount) where n is the number of coins and amount is the target amount. We iterate through all states.
 * @spaceComplexity O(amount) for the 1D tabulation array.
 */
function coinChange4(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let coin of coins) {
        for (let target = coin; target <= amount; target++) {
            dp[target] = Math.min(dp[target], 1 + dp[target - coin])
        }
    }
    return dp[amount] !== Infinity ? dp[amount] : -1
}

// Test
console.log(coinChange1([1, 2, 5], 11)) // Output: 3
console.log(coinChange2([1, 2, 5], 11)) // Output: 3
console.log(coinChange3([1, 2, 5], 11)) // Output: 3
console.log(coinChange4([1, 2, 5], 11)) // Output: 3
console.log(coinChange4([2], 3)) // Output: -1
console.log(coinChange4([1], 0)) // Output: 0