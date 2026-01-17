// Pattern: Array, Binary Search

// LeetCode Problem 875: Koko Eating Bananas
// Koko loves to eat bananas. There are n piles of bananas, the i-th pile has piles[i] bananas. Koko wants to eat all bananas in h hours.
// Koko can choose a pile and eat k bananas per hour. If the pile has less than k bananas, she eats all of them and finishes the pile in that hour.
// Return the minimum integer k such that she can eat all bananas within h hours.

/**
 * @name minEatingSpeedBrute
 * @description Brute Force: Try all possible eating speeds and check if Koko can finish in h hours.
 * @timeComplexity O(n * m) where n is number of piles and m is the maximum pile size
 * @spaceComplexity O(1)
 */
function minEatingSpeedBrute(piles, h) {
    if (piles.length == 0 || h == 0) return 0
    let max = Math.max(...piles)
    for (let k = 1; k <= max; k++) {
        let hour = 0
        for (let pile of piles) {
            hour += Math.ceil(pile / k)
        }
        if (hour <= h) return k
    }
}

/**
 * @name minEatingSpeedOptimal
 * @description Optimal: Binary Search.
 * @timeComplexity O(n log n)
 * @spaceComplexity O(1)
 */
function minEatingSpeedOptimal(piles, h) {
    if (piles.length == 0 || h == 0) return 0
    let left = 1, right = Math.max(...piles)
    let ans = Infinity
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let hours = 0
        for (let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / mid)
        }
        if (hours <= h) {
            ans = Math.min(ans, mid)
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return ans
}


// Test
let piles = [3, 6, 7, 11], h = 8
console.log(minEatingSpeedBrute(piles, h));
console.log(minEatingSpeedOptimal(piles, h));