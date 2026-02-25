import { Tree } from '../Tree.js'

// Pattern: Tree, DFS

// LeetCode Problem 235: Lowest Common Ancestor of a Binary Search Tree
// Given a binary search tree, find the lowest common ancestor (LCA) of two given nodes in the BST.

/**
 * @name lowestCommonAncestorBetter
 * @description : This function finds the lowest common ancestor of two nodes in a binary search tree using a recursive approach. It checks if the current node is greater than both p and q, in which case it continues searching in the left subtree. If the current node is less than both p and q, it continues searching in the right subtree. If neither condition is met, it means the current node is the lowest common ancestor.
 * @timeComplexity O(h) where h is the height of the tree
 * @spaceComplexity O(h) where h is the height of the tree
 */
function lowestCommonAncestorBetter(root, p, q) {
    if (root === null) return null
    function search(node) {
        if (node === null) return null
        if (node.val === p.val || node.val === q.val) return node
        if ((node.val > p.val && node.val < q.val) || (node.val < p.val && node.val > q.val)) return node
        if (node.val > p.val) return search(node.left)
        else return search(node.right)
    }
    return search(root)
}

/**
 * @name lowestCommonAncestorOptimal
 * @description : An optimal solution to find the lowest common ancestor of two nodes in a binary search tree can be achieved by iteratively traversing the tree. We can compare the values of the current node with the values of p and q to determine whether to move left, right, or if we have found the LCA.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(1)
 */
function lowestCommonAncestorOptimal(root, p, q) {
    if (root === null) return null
    if (p.val > q.val) [p, q] = [q, p]
    while (root) {
        if (root.val > p.val && root.val > q.val) {
            root = root.left
        } else if (root.val < q.val && root.val < p.val) {
            root = root.right
        } else {
            return root
        }
    }
    return null
}

// Test
const root = new Tree().arrToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
const p = new Tree().arrToTree([2])
const q = new Tree().arrToTree([8])
console.log(lowestCommonAncestorBetter(root, p, q)); // Output: 6
console.log(lowestCommonAncestorOptimal(root, p, q)); // Output: 6