import { Tree } from '../Tree.js'
import { Queue } from '../../queue/Queue.js'

// Pattern: Tree, BFS

// LeetCode Problem 199: Binary Tree Right Side View
// Given the root of a binary tree, return the right side view of the tree (i.e., the values of the nodes visible when looking at the tree from the right side).

/**
 * @name rightSideView
 * @description : Return the right side view of a binary tree's nodes' values.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(w) where w is the maximum width of the tree (i.e., the number of nodes in the widest level)
 */
function rightSideView(root) {
    if (root === null) return []
    let ans = []
    let q = new Queue()
    q.push(root)
    while (q.length()) {
        let size = q.length()
        let right = null
        for (let i = 0; i < size; i++) {
            let node = q.pop()
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            right = node.val
        }
        ans.push(right)
    }
    return ans
}

// Test
const root = new Tree().arrToTree([1, 2, 3, null, 5, null, 4])
const root2 = new Tree().arrToTree([1, 2, 3, 4, null, null, null, 5])

console.log(rightSideView(root)); // Output: [1,3,4]
console.log(rightSideView(root2)); // Output: [1,3,4,5]