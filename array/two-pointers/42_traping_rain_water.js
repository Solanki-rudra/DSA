// Pattern: Array, Two Pointers

// LeetCode Problem 42: Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

/**
 * @name trapBrute
 * @description Brute Force: try by checking max left and right for each element.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(1)
 */
function trapBrute(height) {
    let ans = 0
    for (let i = 0; i < height.length; i++) {
        let maxLeft = 0, maxRight = 0;
        for (let j = i - 1; j >= 0; j--) {
            maxLeft = Math.max(maxLeft, height[j])
        }
        for (let k = i + 1; k < height.length; k++) {
            maxRight = Math.max(maxRight, height[k])
        }
        let unit = Math.min(maxLeft, maxRight) - height[i]
        if (unit > 0) ans += unit
    }
    return ans
}


// Test
const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trapBrute(height));