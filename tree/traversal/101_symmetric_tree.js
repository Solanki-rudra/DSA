import { Tree } from '../Tree.js'

// Pattern: Tree, Traversal

// LeetCode Problem 101: Symmetric Tree
// Given a binary tree, check whether it is a mirror of itself.

/**
 * @name isSymmetric
 * @description : Check if a binary tree is symmetric.
 * @timeComplexity O(n)
 * @spaceComplexity O(h) where h is the height of the tree
 */
function isSymmetric(root) {
    function isSame(left, right) {
        if (!left && !right) return true
        if (!left || !right || left.val !== right.val) return false
        return isSame(left.left, right.right) && isSame(left.right, right.left)
    }
    if (root === null) return true
    return isSame(root.left, root.right)
}

// Test
const root = new Tree().arrToTree([1, 2, 2, 3, 4, 4, 3])
const root2 = new Tree().arrToTree([1, 2, 2, null, 3, null, 3])

console.log(isSymmetric(root)); // Output: true
console.log(isSymmetric(root2)); // Output: false