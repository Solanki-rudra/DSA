import { Tree } from '../Tree.js'

// Pattern: Tree, DFS

// LeetCode Problem 104: Maximum Depth of Binary Tree
// Given a binary tree, find its maximum depth.

/**
 * @name maxDepth
 * @description : Find the maximum depth of a binary tree.
 * @timeComplexity O(n)
 * @spaceComplexity O(h) where h is the height of the tree
 */
function maxDepth(root) {
    if (root === null) return 0
    let leftMax = maxDepth(root.left)
    let rightMax = maxDepth(root.right)
    return Math.max(leftMax, rightMax) + 1
}

// Test
const root = new Tree().arrToTree([3, 9, 20, null, null, 15, 7])
console.log(maxDepth(root)); // Output: 3