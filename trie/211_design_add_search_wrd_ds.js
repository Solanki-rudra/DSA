// Pattern: Trie (Prefix Tree)

// LeetCode Problem 211: design add and search words data structure
// Implement the Add and Search words in a data structure.

/**
 * @name WordDictionary
 * @description : Implement a data structure to add and search words.
 * @timeComplexity O(n) where n is the length of the word
 * @spaceComplexity O(ALPHABET_SIZE * N) where N is the total number of characters in all words
 */
var WordDictionary = function() {
    this.map = new Map()
    this.isEnd = false
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this
    for(let i = 0; i<word.length; i++){
        let ch = word[i]
        if(!node.map.has(ch)){
            node.map.set(ch, new WordDictionary())
        }
        node = node.map.get(ch)
    }
    node.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return dfs(word, 0, this)
};

function dfs(word, i, node){
    if(word.length === i) return node.isEnd

    let ch = word[i]
    if(ch === '.'){
        for(let child of node.map.values()){
            if(dfs(word, i+1, child)) return true
        }
        return false
    }

    if(!node.map.has(ch)) return false

    return dfs(word, i+1, node.map.get(ch))
}

// Test

let wordDictionary = new WordDictionary()
wordDictionary.addWord("bad")
wordDictionary.addWord("dad")
wordDictionary.addWord("mad")
console.log(wordDictionary.search("pad")) // false
console.log(wordDictionary.search("bad")) // true
console.log(wordDictionary.search(".ad")) // true
console.log(wordDictionary.search("b..")) // true