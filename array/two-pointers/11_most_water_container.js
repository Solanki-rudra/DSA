// Pattern: Array, Two Pointers

// LeetCode Problem 11: Container With Most Water
// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

/**
 * @name maxAreaBrute
 * @description Brute Force: Try all pairs and compute the maximum area.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(1)
 */
function maxAreaBrute(height) {
    let ans = 0
    for(let i=0; i<height.length; i++){
        for(let j=i+1; j<height.length; j++){
            let area = Math.min(height[i], height[j]) * (j - i)
            ans = Math.max(area, ans)
        }
    }
    return ans
}

/**
 * @name maxAreaOptimal
 * @description Optimal: Two pointers from both ends to find max area.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function maxAreaOptimal(height) {
    let ans = 0
    let l = 0, r = height.length - 1;
    while(l < r){
        let area = Math.min(height[l], height[r]) * (r - l)
        if(ans < area){
            ans = area
        }
        height[l] < height[r] ? l++ : r--;
    }
    return ans
}


// Test
const height = [1,8,6,2,5,4,8,3,7];
console.log(maxAreaBrute(height));
console.log(maxAreaOptimal(height));