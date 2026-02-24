import { Tree } from '../Tree.js'

// Pattern: Tree, DFS

// LeetCode Problem 98: Validate Binary Search Tree
// Given a binary tree, determine if it is a valid binary search tree (BST).

/**
 * @name isValidBST
 * @description : DFS approach to validate a binary search tree. We use a helper function `dfs` to traverse the tree and validate each node against its bounds. The bounds are updated as we move down the tree.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(h) where h is the height of the tree
 */
function isValidBST(root) {
    if (root === null) return true
    let prev = null
    function inOrder(node) {
        if (node === null) return true
        if (!inOrder(node.left)) {
            return false
        }
        if (prev !== null && node.val <= prev) return false
        prev = node.val
        return inOrder(node.right)
    }
    return inOrder(root)
}

// Test
const root = new Tree().arrToTree([2, 1, 3])
const root2 = new Tree().arrToTree([5, 1, 4, null, null, 3, 6])
console.log(isValidBST(root)); // Output: true
console.log(isValidBST(root2)); // Output: false