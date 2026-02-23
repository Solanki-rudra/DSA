import { Tree } from '../Tree.js'
import { Queue } from '../../queue/Queue.js'

// Pattern: Tree, BFS

// LeetCode Problem 102: Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).

/**
 * @name levelOrderDFS
 * @description : Return the level order traversal of a binary tree's nodes' values.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(h) where h is the height of the tree (due to recursion stack)
 */
function levelOrderDFS(root) {
    let ans = []
    if (root === null) return ans
    function order(node, level) {
        if (ans.length === level) {
            ans.push([])
        }
        ans[level].push(node.val)
        if (node.left) order(node.left, level + 1)
        if (node.right) order(node.right, level + 1)
    }
    order(root, 0)
    return ans
}

/**
 * @name levelOrderBFS
 * @description : Return the level order traversal of a binary tree's nodes' values.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(w) where w is the maximum width of the tree (i.e., the number of nodes in the widest level)
 */
function levelOrderBFS(root) {
    if (root === null) return []
    let queue = new Queue()
    queue.push(root)
    let ans = []
    while (queue.length()) {
        let size = queue.length()
        let level = []
        for (let i = 0; i < size; i++) {
            let curr = queue.pop()
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
            level.push(curr.val)
        }
        ans.push(level)
    }
    return ans
}

// Test
const root = new Tree().arrToTree([3, 9, 20, null, null, 15, 7])
console.log(levelOrderDFS(root)); // Output: [[3],[9,20],[15,7]]
console.log(levelOrderBFS(root)); // Output: [[3],[9,20],[15,7]]