import { Tree } from '../Tree.js'

// Pattern: Tree, Traversal

// LeetCode Problem 226: Invert Binary Tree
// Given the root of a binary tree, invert the tree, and return its root.

/**
 * @name invertTreeOptimal
 * @description : Recursively determine whether two binary trees are the same by comparing the left and right subtrees of each node.
 * @timeComplexity O(n)
 * @spaceComplexity O(h) where h is the height of the tree
 */
function invertTreeOptimal(root) {
    if (root === null) return null
    let temp = root.left
    root.left = invertTreeOptimal(root.right)
    root.right = invertTreeOptimal(temp)
    return root
}

/**
 * @name invertTreeOptimal2
 * @description : Iteratively determine whether two binary trees are the same by comparing the left and right subtrees of each node using a stack.
 * @timeComplexity O(n)
 * @spaceComplexity O(h) where h is the height of the tree
 */
function invertTreeOptimal2(root) {
    if (root === null) return null
    const stack = [root]
    while (stack.length > 0) {
        const node = stack.pop()
        const temp = node.left
        node.left = node.right
        node.right = temp
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    return root
}

// Test
const root1 = new Tree().arrToTree([4, 2, 7, 1, 3, 6, 9])
const root2 = new Tree().arrToTree([2, 1, 3])
const root3 = new Tree().arrToTree([1, null, 2])
const root4 = new Tree().arrToTree([4, 2, 7, 1, 3, 6, 9])
const root5 = new Tree().arrToTree([2, 1, 3])
const root6 = new Tree().arrToTree([1, null, 2])

console.log(invertTreeOptimal(root1)); // Output: [4,7,2,9,6,3,1]
console.log(invertTreeOptimal(root2)); // Output: [2,3,1]
console.log(invertTreeOptimal(root3)); // Output: [1,2,null]

console.log(invertTreeOptimal2(root4)); // Output: [4,7,2,9,6,3,1]
console.log(invertTreeOptimal2(root5)); // Output: [2,3,1]
console.log(invertTreeOptimal2(root6)); // Output: [1,2,null]