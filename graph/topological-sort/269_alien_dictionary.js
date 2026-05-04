// Pattern: Graph, topological sort

// LeetCode Problem 269: Alien Dictionary
// In this problem, we are given a list of words in lexicographical order according to an unknown alphabet. We need to determine the order of the characters in the alphabet.

/**
 * @name alienOrder
 * @description Approach: BFS — Kahn's Algorithm (Topological Sort)
 * Build a directed graph from adjacent word pairs by comparing characters at each position.
 * The first differing character between two consecutive words gives an edge u → v.
 * Then apply Kahn's algorithm: initialize a queue with all zero-indegree nodes,
 * process them in BFS order, decrement neighbour indegrees, and enqueue newly zero-indegree nodes.
 * If the result length equals the total number of unique characters, no cycle exists and the
 * result is the alien alphabet order; otherwise return "" (cycle detected / invalid input).
 * Also handles the edge case where a longer word appears before its prefix (invalid ordering).
 * @timeComplexity O(C) where C is the total number of characters across all words
 * @spaceComplexity O(V + E) where V is the number of unique characters and E is the number of edges
 */
function alienOrder(words) {
    const inDegree = new Map();
    const adj = new Map();

    for (let word of words) {
        for (let char of word) {
            if (!inDegree.has(char)) {
                inDegree.set(char, 0);
            }
            if (!adj.has(char)) {
                adj.set(char, []);
            }
        }
    }

    for (let i = 1; i < words.length; i++) {
        const w1 = words[i - 1];
        const w2 = words[i];
        const minLen = Math.min(w1.length, w2.length);

        for (let j = 0; j < minLen; j++) {
            const u = w1[j];
            const v = w2[j];

            if (u !== v) {
                if (!adj.get(u).includes(v)) {
                    adj.get(u).push(v);
                    inDegree.set(v, inDegree.get(v) + 1);
                }
                break;
            }
        }

        if (w1.length > w2.length && w1.startsWith(w2)) {
            return "";
        }
    }

    // Kahn's algorithm for topological sort
    const queue = [];
    for (let [char, degree] of inDegree) {
        if (degree === 0) {
            queue.push(char);
        }
    }

    const result = [];
    while (queue.length > 0) {
        const u = queue.shift();
        result.push(u);

        for (let v of adj.get(u)) {
            inDegree.set(v, inDegree.get(v) - 1);
            if (inDegree.get(v) === 0) {
                queue.push(v);
            }
        }
    }

    if (result.length !== inDegree.size) {
        return "";
    }

    return result.join("");
}

let words = ["wrt", "wrf", "er", "ett", "rftt"]

console.log(alienOrder(words))