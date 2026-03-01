import { TreeNode } from "../Tree.js"

// Pattern: Tree, DFS

// LeetCode Problem 105: Construct Binary Tree from Preorder and Inorder Traversal
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

/**
 * @name buildTree
 * @description : Build a binary tree from preorder and inorder traversals.
 * @timeComplexity O(n)
 * @spaceComplexity O(h) where h is the height of the tree
 */
function buildTree(preorder, inorder) {
    let map = new Map()

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }

    return generateTree(
        preorder, 0, preorder.length - 1,
        inorder, 0, inorder.length - 1,
        map
    )
}

function generateTree(preorder, preStart, preEnd, inorder, inStart, inEnd, map) {
    if (preStart > preEnd || inStart > inEnd) return null

    let root = new TreeNode(preorder[preStart])

    let inRoot = map.get(root.val)
    let numsLeft = inRoot - inStart

    root.left = generateTree(
        preorder,
        preStart + 1,
        preStart + numsLeft,
        inorder,
        inStart,
        inRoot - 1,
        map
    )

    root.right = generateTree(
        preorder,
        preStart + numsLeft + 1,
        preEnd,
        inorder,
        inRoot + 1,
        inEnd,
        map
    )
    return root
}

// Test
const root = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
console.log(root);