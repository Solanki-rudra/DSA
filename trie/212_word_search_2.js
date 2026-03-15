

import { Trie } from "./208_implement_trie.js"

// Pattern: Trie (Prefix Tree)

// LeetCode Problem 212: Word Search II
// Given a 2D board of characters and a list of words, find all words in the board. Each word must be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

/**
 * @name findWords
 * @description : Return the zigzag level order traversal of a binary tree's nodes' values.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(w) where w is the maximum width of the tree (i.e., the number of nodes in the widest level)
 */
function findWords(board, words) {
    let wordTrie = new Trie()
    for (let i = 0; i < words.length; i++) {
        wordTrie.insert(words[i])
    }
    let aLen = board.length, bLen = board[0].length
    let result = []
    let visited = new Set()

    function dfs(a, b, node, word) {
        let key = `${a},${b}`
        if (a < 0 || b < 0 || a >= aLen || b >= bLen || visited.has(key)) return

        node = node.get(board[a][b])
        if (!node) return
        
        visited.add(key)
        word += board[a][b]

        if (node.isEnd){
            result.push(word)
            node.isEnd = false // Avoid duplicate entries
        }
        dfs(a + 1, b, node, word)
        dfs(a - 1, b, node, word)
        dfs(a, b + 1, node, word)
        dfs(a, b - 1, node, word)

        visited.delete(key)
    }

    for (let i = 0; i < aLen; i++) {
        for (let j = 0; j < bLen; j++) {
            dfs(i, j, wordTrie.root, '')
        }
    }

    return result
}


// Test
const board = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], words = ["oath", "pea", "eat", "rain"]
console.log(findWords(board, words)); // Output: ["oath", "eat"]