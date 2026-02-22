import { Tree } from '../Tree.js'

// Pattern: Tree, DFS

// LeetCode Problem 102: Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).

/**
 * @name levelOrder
 * @description : Return the level order traversal of a binary tree's nodes' values.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(w) where w is the maximum width of the tree
 */
function levelOrder(root) {
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

// Test
const root = new Tree().arrToTree([3, 9, 20, null, null, 15, 7])
console.log(levelOrder(root)); // Output: [[3],[9,20],[15,7]]