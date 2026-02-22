import { Tree } from '../Tree.js'

// Pattern: Tree, DFS

// LeetCode Problem 100: Same Tree
// Given two binary trees, write a function to check if they are the same or not.

/**
 * @name isSameTreeOptimal
 * @description : Recursively determine whether two binary trees are the same.
 * @timeComplexity O(n)
 * @spaceComplexity O(h) where h is the height of the tree
 */
function isSameTreeOptimal(p, q) {
    if (!p && !q) return true
    if (!p || !q || p.val !== q.val) return false
    return isSameTreeOptimal(p.left, q.left) && isSameTreeOptimal(p.right, q.right)
}

/**
 * @name isSameTreeOptimal2
 * @description : Iteratively determine whether two binary trees are the same using a stack of node pairs.
 * @timeComplexity O(n)
 * @spaceComplexity O(h) where h is the height of the tree
 */
function isSameTreeOptimal2(p, q) {
    let stack = [[p, q]]

    while (stack.length) {
        const [node1, node2] = stack.pop()

        if (!node1 && !node2) continue
        if (!node1 || !node2 || node1.val !== node2.val) return false

        stack.push([node1.left, node2.left])
        stack.push([node1.right, node2.right])
    }
    return true
}

// Test
const root1 = new Tree().arrToTree([1, 2, 3])
const root2 = new Tree().arrToTree([1, 2, 3])
const root3 = new Tree().arrToTree([1, 2])
const root4 = new Tree().arrToTree([1, null, 2])
const root5 = new Tree().arrToTree([1, 2, 1])
const root6 = new Tree().arrToTree([1, 1, 2])

console.log(isSameTreeOptimal(root1, root2)); // Output: true
console.log(isSameTreeOptimal(root3, root4)); // Output: false
console.log(isSameTreeOptimal(root5, root6)); // Output: false

console.log(isSameTreeOptimal2(root1, root2)); // Output: true
console.log(isSameTreeOptimal2(root3, root4)); // Output: false
console.log(isSameTreeOptimal2(root5, root6)); // Output: false