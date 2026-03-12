import { Tree } from '../Tree.js'

// Pattern: Tree, DFS

// LeetCode Problem 124: Binary Tree Maximum Path Sum
// Given a binary tree, find the maximum path sum.

/**
 * @name maxPathSum
 * @description : Recursively calculate the maximum path sum in a binary tree.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(h) where h is the height of the tree
 */
function maxPathSum(root) {
    let max = -Infinity
    function backTracking(root) {
        if (root === null) return 0
        let left = Math.max(0, backTracking(root.left))
        let right = Math.max(0, backTracking(root.right))
        max = Math.max(max, root.val + left + right)
        return root.val + Math.max(left, right)
    }
    backTracking(root)
    return max
}

// Test
const root = new Tree().arrToTree([-10, 9, 20, null, null, 15, 7])

console.log(maxPathSum(root)); // Output: 42