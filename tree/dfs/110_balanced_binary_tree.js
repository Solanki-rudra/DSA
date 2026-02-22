import { Tree } from '../Tree.js'

// Pattern: Tree, DFS

// LeetCode Problem 110: Balanced Binary Tree
// Given the root of a binary tree, determine if it is a balanced binary tree.

/**
 * @name isBalancedBrute
 * @description : Recursively determine whether two binary trees are the same by comparing the left and right subtrees of each node and calculating the height of each subtree.
 * @timeComplexity O(n^2) where n is the number of nodes in the tree
 * @spaceComplexity O(h) where h is the height of the tree
 */
function isBalancedBrute(root) {
    if (root === null) return true
    let leftHeight = getHeight(root.left)
    let rightHeight = getHeight(root.right)
    if (Math.abs(leftHeight - rightHeight) > 1) return false
    return isBalanced(root.left) && isBalanced(root.right)
}

function getHeight(root) {
    if (root === null) return 0
    let leftHeight = getHeight(root.left)
    let rightHeight = getHeight(root.right)
    return Math.max(leftHeight, rightHeight) + 1
}

/**
 * @name isBalancedOptimal
 * @description : Recursively determine whether two binary trees are the same by comparing the left and right subtrees of each node and calculating the height of each subtree. If the height difference is greater than 1, return -1 to indicate that the tree is not balanced. Otherwise, return the height of the subtree.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(h) where h is the height of the tree
 */
function isBalancedOptimal(root) {
    return checkHeight(root) !== -1
}

function checkHeight(root) {
    if (root === null) return 0
    let leftHeight = checkHeight(root.left)
    if (leftHeight === -1) return -1
    let rightHeight = checkHeight(root.right)
    if (rightHeight === -1) return -1
    if (Math.abs(leftHeight - rightHeight) > 1) return -1
    return Math.max(leftHeight, rightHeight) + 1
}

// Test
const root1 = new Tree().arrToTree([3, 9, 20, null, null, 15, 7])
const root2 = new Tree().arrToTree([1, 2, 2, 3, 3, null, null, 4, 4])
const root3 = new Tree().arrToTree([])

console.log(isBalancedBrute(root1)); // Output: true
console.log(isBalancedBrute(root2)); // Output: false
console.log(isBalancedBrute(root3)); // Output: true

console.log(isBalancedOptimal(root1)); // Output: true
console.log(isBalancedOptimal(root2)); // Output: false
console.log(isBalancedOptimal(root3)); // Output: true