

// Pattern: Trie (Prefix Tree)

// LeetCode Problem 208: Implement Trie (Prefix Tree)
// Design an algorithm to implement a trie (prefix tree).

class TrieNode {
    constructor() {
        this.map = new Map()
        this.isEnd = false
    }
    isContain(ch) {
        return this.map.has(ch)
    }
    set(ch, node) {
        this.map.set(ch, node)
    }
    end() {
        this.isEnd = true
    }
    get(ch) {
        return this.isContain(ch) ? this.map.get(ch) : null
    }
}

export class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @TimeComplexity O(m) where m is the length of the word
     * @SpaceComplexity O(m) where m is the length of the word
     */
    insert(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            let ch = word[i]
            if (!node.isContain(ch)) {
                node.set(ch, new TrieNode())
            }
            node = node.get(ch)
        }
        node.end()
    }

    /**
     * @TimeComplexity O(m) where m is the length of the word
     * @SpaceComplexity O(1)
     */
    search(word) {
        let node = this.#searchPrefix(word)
        if (!node) return false
        return node.isEnd
    }

    /**
     * @TimeComplexity O(m) where m is the length of the word
     * @SpaceComplexity O(1)
     */
    startsWith(prefix) {
        return !!this.#searchPrefix(prefix)
    }

    /**
     * @TimeComplexity O(m) where m is the length of the word
     * @SpaceComplexity O(1)
     */
    #searchPrefix(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            let ch = word[i]
            node = node.get(ch)
            if (!node) return false
        }
        return node
    }
}


// ================= TESTING =================

const trie = new Trie()

console.log("---- INSERT ----")
trie.insert("apple")
console.log("Inserted: apple")

console.log("\n---- SEARCH ----")
console.log("search('apple'):", trie.search("apple"))   // true
console.log("search('app'):", trie.search("app"))       // false

console.log("\n---- STARTS WITH ----")
console.log("startsWith('app'):", trie.startsWith("app")) // true

console.log("\n---- INSERT app ----")
trie.insert("app")

console.log("\n---- SEARCH AGAIN ----")
console.log("search('app'):", trie.search("app"))       // true

console.log("\n---- INSERT bat and ball ----")
trie.insert("bat")
trie.insert("ball")
console.log("Inserted: bat, ball")

console.log("\n---- SEARCH bat, ball, ba ----")
console.log("search('bat'):", trie.search("bat"))       // true
console.log("search('ball'):", trie.search("ball"))     // true
console.log("search('ba'):", trie.search("ba"))         // false
console.log("startsWith('ba'):", trie.startsWith("ba")) // true
console.log("startsWith('cat'):", trie.startsWith("cat")) // false