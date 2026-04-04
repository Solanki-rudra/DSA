// Pattern: Graph, traversal

// LeetCode Problem 127: Word Ladder
// In this problem, we are given a beginWord, an endWord, and a wordList. We need to find the shortest transformation sequence from beginWord to endWord.

/**
 * @name ladderLengthI
 * @description  Approach: Breadth-First Search (BFS)
 * The idea is to use a breadth-first search to traverse the word list and find the shortest transformation sequence from beginWord to endWord.
 * @timeComplexity O(m * n * k) where m is the length of each word, n is the number of words in the wordList, and k is the average number of transformations needed
 * @spaceComplexity O(n * m) where n is the number of words in the wordList and m is the length of each word
 */
function ladderLengthI(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList)
    if (!wordSet.has(endWord)) return 0

    let ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
    let q = [[beginWord, 1]]
    let front = 0

    while (front < q.length) {
        let [word, level] = q[front++]
        if (word === endWord) return level
        for (let i = 0; i < word.length; i++) {
            for (let ch of ALPHABET) {
                if (ch === word[i]) continue
                let next = word.slice(0, i) + ch + word.slice(i + 1)
                if (wordSet.has(next)) {
                    wordSet.delete(next)
                    q.push([next, level + 1])
                }
            }
        }
    }
    return 0
}

/**
 * @name ladderLengthII
 * @description  Approach: Bidirectional Breadth-First Search (BFS)
 * The idea is to use a breadth-first search from both the beginWord and endWord simultaneously. This can potentially reduce the search space and improve performance, especially when the transformation sequence is long.
 * @timeComplexity O(m * n * k) where m is the length of each word, n is the number of words in the wordList, and k is the average number of transformations needed
 * @spaceComplexity O(n * m) where n is the number of words in the wordList and m is the length of each word
 */
function ladderLengthII(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList)
    if (!wordSet.has(endWord)) return 0

    let ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
    let beginSet = new Set([beginWord])
    let endSet = new Set([endWord])
    let level = 1

    while (beginSet.size && endSet.size) {
        if (beginSet.size > endSet.size) {
            [beginSet, endSet] = [endSet, beginSet]
        }
        let newSet = new Set()
        for (let word of beginSet) {
            for (let i = 0; i < word.length; i++) {
                for (let ch of ALPHABET) {
                    if (ch === word[i]) continue
                    let next = word.slice(0, i) + ch + word.slice(i + 1)
                    if (endSet.has(next)) return level + 1
                    if (wordSet.has(next)) {
                        wordSet.delete(next)
                        newSet.add(next)
                    }
                }
            }
        }
        beginSet = newSet
        level++
    }
    return 0
}

let beginWord = "hit"
let endWord = "cog"
let wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

console.log(ladderLengthI(beginWord, endWord, wordList))
console.log(ladderLengthII(beginWord, endWord, wordList))