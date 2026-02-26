import { Tree } from '../Tree.js'

// Pattern: Tree, DFS

// LeetCode Problem 230: Kth Smallest Element in a BST
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

/**
 * @name kthSmallestBetter
 * @description : Recursively perform an in-order traversal of the binary search tree to collect the node values in sorted order, and then return the k-1 indexed value from the resulting array.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(n) where n is the number of nodes in the tree
 */
function kthSmallestBetter(root, k) {
    if (root === null) return null
    let arr = []
    function inOrder(node) {
        if (node === null) return
        inOrder(node.left)
        arr.push(node.val)
        inOrder(node.right)
    }
    inOrder(root)
    return arr[k - 1]
}

/**
 * @name kthSmallestOptimal
 * @description : Iteratively perform an in-order traversal of the binary search tree using a stack to keep track of the nodes. As we traverse, we decrement k until it reaches 0, at which point we return the value of the current node.
 * @timeComplexity O(h + k) where h is the height of the tree and k is the number of nodes we need to visit to find the kth smallest element
 * @spaceComplexity O(h) where h is the height of the tree
 */
function kthSmallestOptimal(root, k) {
    if (root === null) return null
    let stack = []
    let curr = root
    while (true) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        k--
        if (k === 0) return curr.val
        curr = curr.right
    }
}

// Test
const root = new Tree().arrToTree([5, 3, 6, 2, 4, null, null, 1])

console.log(kthSmallestBetter(root, 3)); // Output: 1
console.log(kthSmallestOptimal(root, 3)); // Output: 1