import { LinkedList } from "../LinkedList.js";

// Pattern: Linked List, Advanced Structures

// LeetCode Problem 114: Flatten Binary Tree to Linked List
// Flatten a binary tree to a linked list in-place.


/**
* @name flattenBrute
* @description Brute Force Approach: Perform a reverse pre-order traversal (right -> left -> node) and re-link nodes to form a linked list.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function flattenBrute(root) {
    let prev = null
    function dfs(node) {
        if (node === null) return
        dfs(node.right)
        dfs(node.left)
        node.right = prev
        node.left = null
        prev = node
    }
    dfs(root)
    return root
}

/**
* @name flattenOptimal
* @description Optimal Approach: Iteratively re-link nodes using the rightmost node of the left subtree.
* @timeComplexity O(n)
* @spaceComplexity O(1)
*/
function flattenOptimal(root) {
    let curr = root
    while (curr !== null) {
        if (curr.left) {
            let prev = curr.left
            while (prev.right) {
                prev = prev.right
            }
            prev.right = curr.right
            curr.right = curr.left
            curr.left = null
        }
        curr = curr.right
    }
    return root
}

// Test
const root = [1, 2, 5, 3, 4, null, 6]

const tree = new LinkedList().arrToTree(root);

console.log(flattenBrute(tree));
console.log(flattenOptimal(tree));