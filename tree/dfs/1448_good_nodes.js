import { Tree } from '../Tree.js'

// Pattern: Tree, DFS

// LeetCode Problem 1448: Count Good Nodes in Binary Tree
// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
// Return the number of good nodes in the binary tree.

/**
 * @name goodNodes
 * @description : DFS approach to count good nodes in a binary tree. We keep track of the maximum value seen so far on the path from the root to the current node. If the current node's value is greater than or equal to this maximum value, it is a good node, and we update the maximum value for the subsequent recursive calls.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(h) where h is the height of the tree
 */
function goodNodes(root) {
    function countGoodNodes(node, maxValue) {
        if (node === null) {
            return 0
        }
        let count = 0
        if (node.val >= maxValue) {
            count++
            maxValue = node.val
        }
        count += countGoodNodes(node.left, maxValue)
        count += countGoodNodes(node.right, maxValue)
        return count
    }
    return countGoodNodes(root, -Infinity)
}

// Test
const root = new Tree().arrToTree([3, 1, 4, 3, null, 1, 5])
console.log(goodNodes(root)); // Output: 4