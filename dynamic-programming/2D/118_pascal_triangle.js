// Pattern: Dynamic Programming, 2D

// LeetCode Problem 118: Pascal's Triangle
// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

/**
 * @name generate
 * @description Approach: Iteration / Dynamic Programming
 * The idea is to build the triangle row by row. The first row is always [1]. For subsequent rows, each element is the sum of the two elements directly above it from the previous row: result[i-1][j-1] + result[i-1][j].
 * @timeComplexity O(numRows^2) where numRows is the input parameter, since we have a nested loop iterating through the rows and their elements.
 * @spaceComplexity O(numRows^2) for the output array containing the first numRows of Pascal's triangle.
 */
function generate(numRows) {
    if (numRows < 1) return []
    let result = [[1]]
    for (let i = 1; i < numRows; i++) {
        let row = []
        for (let j = 0; j <= i; j++) {
            let left = result[i - 1][j - 1] ?? 0;
            let right = result[i - 1][j] ?? 0;
            row.push(left + right)
        }
        result.push(row)
    }
    return result
}

// Test
console.log(generate(1)) // Output: [[1]]
console.log(generate(5)) // Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]