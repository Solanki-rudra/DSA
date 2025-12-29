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

/**
 * @name trapBetter
 * @description Better : Precompute max left and right for each element.
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function trapBetter(height) {
    let h = height.length
    let ans = 0
    let leftHeight = Array(h).fill(height[0])
    let rightHeight = Array(h).fill(height[h - 1])
    for (let i = 1; i < h; i++) {
        leftHeight[i] = Math.max(leftHeight[i - 1], height[i])
    }
    for (let j = h - 2; j >= 0; j--) {
        rightHeight[j] = Math.max(rightHeight[j + 1], height[j])
    }
    for (let k = 0; k < h; k++) {
        let unit = Math.min(leftHeight[k], rightHeight[k]) - height[k]
        if (unit > 0) ans += unit
    }
    return ans
}

/**
 * @name trapOptimal
 * @description Optimal : Two pointers from both ends to calculate trapped water.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function trapOptimal(height) {
    let ans = 0
    let l = 0, r = height.length - 1
    let lMax = 0, rMax = 0
    while (l < r) {
        if (height[l] <= height[r]) {
            if (lMax > height[l]) {
                ans += lMax - height[l]
            } else {
                lMax = height[l]
            }
            l++
        } else {
            if (rMax > height[r]) {
                ans += rMax - height[r]
            } else {
                rMax = height[r]
            }
            r--
        }
    }
    return ans
}

// Test
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trapBrute(height));
console.log(trapBetter(height));
console.log(trapOptimal(height));