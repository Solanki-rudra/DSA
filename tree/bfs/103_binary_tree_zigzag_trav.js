import { Tree } from '../Tree.js'
import { Queue } from '../../queue/Queue.js'

// Pattern: Tree, DFS

// LeetCode Problem 103: Binary Tree Zigzag Level Order Traversal
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values (i.e., from left to right, level by level).

/**
 * @name zigzagLevelOrder
 * @description : Return the zigzag level order traversal of a binary tree's nodes' values.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(w) where w is the maximum width of the tree (i.e., the number of nodes in the widest level)
 */
function zigzagLevelOrder(root) {
    if (root === null) return []
    let q = new Queue()
    q.push(root)
    let ltor = true
    let ans = []
    while (q.length()) {
        let size = q.length()
        let level = []
        for (let i = 0; i < size; i++) {
            let node = q.pop()
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            if (ltor) {
                level.push(node.val)
            } else {
                level.unshift(node.val)
            }
        }
        ltor = !ltor
        ans.push(level)
    }
    return ans
}

// Test
const root = new Tree().arrToTree([3, 9, 20, null, null, 15, 7])
console.log(zigzagLevelOrder(root)); // Output: [[3], [20, 9], [15, 7]]