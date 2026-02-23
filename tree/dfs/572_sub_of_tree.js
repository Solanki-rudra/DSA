import { Tree } from '../Tree.js'

// Pattern: Tree, DFS

// LeetCode Problem 572: Subtree of Another Tree
// Given two binary trees, determine if the first tree is a subtree of the second tree.

/**
 * @name isSubtree
 * @description : Find the maximum depth of a binary tree.
 * @timeComplexity O(m * n) where m and n are the number of nodes in the two trees
 * @spaceComplexity O(h) where h is the height of the tree
 */
function isSubtree(root, subRoot) {
    if (root === null || subRoot === null) return root === subRoot
    if (isSame(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

function isSame(p, q) {
    if (p === null || q === null) return p === q
    if (p.val !== q.val) return false
    return isSame(p.left, q.left) && isSame(p.right, q.right)
}

// Test
const root = new Tree().arrToTree([3, 4, 5, 1, 2]), subRoot = new Tree().arrToTree([4, 1, 2])
console.log(isSubtree(root, subRoot)); // Output: true