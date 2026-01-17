// Pattern: Array, Two Pointers

// LeetCode Problem 74: Search 2D Matrix
// Given a 2D matrix of integers, determine if a target value exists in the matrix.

/**
 * @name searchMatrixBrute
 * @description Brute Force: try by checking each element.
 * @timeComplexity O(n * m)
 * @spaceComplexity O(1)
 */
function searchMatrixBrute(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) return true
        }
    }
    return false
}

/**
 * @name searchMatrixBetter
 * @description Better : Binary Search on each row.
 * @timeComplexity O(n log m)
 * @spaceComplexity O(1)
 */
function searchMatrixBetter(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let current = matrix[i]
        let lastInd = current.length - 1
        if (current[lastInd] === target) return true
        if (current[lastInd] > target) {
            let l = 0, r = lastInd;
            while (l <= r) {
                let mid = Math.floor((l + r) / 2)
                if (current[mid] === target) return true
                else if (current[mid] < target) l = mid + 1
                else r = mid - 1
            }
        }
    }
    return false
}

/**
 * @name searchMatrixOptimal
 * @description Optimal : Binary Search on the entire matrix as a flattened array.
 * @timeComplexity O(log (m*n))
 * @spaceComplexity O(1)
 */
function searchMatrixOptimal(matrix, target) {
    let m = matrix.length
    let n = matrix[0].length
    let l = 0, r = m * n - 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        let midValue = matrix[Math.floor(mid / n)][mid % n]
        if (midValue === target) return true
        else if (midValue < target) l = mid + 1
        else r = mid - 1
    }
    return false
}

// Test
let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3
console.log(searchMatrixBrute(matrix, target));
console.log(searchMatrixBetter(matrix, target));
console.log(searchMatrixOptimal(matrix, target));