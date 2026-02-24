import { Tree } from '../Tree.js'

// Pattern: Tree, DFS

// LeetCode Problem 543: Diameter of Binary Tree
// Given a binary tree, find the diameter of the tree.

/**
 * @name diameterOfBinaryTree
 * @description : DFS approach to find the diameter of a binary tree. The diameter of a binary tree is the length of the longest path between any two nodes in the tree. We use a helper function `dfs` to calculate the depth of the tree while updating the diameter at each node. The diameter is updated by comparing the current diameter with the sum of the left and right depths at each node.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(h) where h is the height of the tree
 */
function diameterOfBinaryTree(root) {
    if (root === null) return 0
    let diameter = 0
    function dfs(node) {
        if (node === null) return 0
        let left = dfs(node.left)
        let right = dfs(node.right)
        diameter = Math.max(diameter, left + right)
        return Math.max(left, right) + 1
    }
    dfs(root)
    return diameter
}

// Test
const root = new Tree().arrToTree([1, 2, 3, 4, 5])
console.log(diameterOfBinaryTree(root)); // Output: 3