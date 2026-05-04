// Pattern: Graph, topological sort

// LeetCode Problem 269: Alien Dictionary
// In this problem, we are given a list of words in lexicographical order according to an unknown alphabet. We need to determine the order of the characters in the alphabet.

/**
 * @name alienOrder
 * @description  Approach: Depth-First Search (DFS)
 * We can represent the words and their order as a directed graph. We will use DFS to detect if there is a cycle in the graph. If there is a cycle, it means that it is not possible to determine the order of the characters. We will maintain two sets: one for visited nodes and another for safe nodes (nodes that have been fully processed). If we encounter a node that is already in the visited set, it means we have found a cycle. If we encounter a node that is in the safe set, it means we have already processed it and can skip it.
 * @timeComplexity O(C + V) where C is the total number of characters in all words and V is the number of vertices
 * @spaceComplexity O(V + E) where V is the number of vertices and E is the number of edges
 */
function alienOrder(words) {
    const inDegree = new Map();
    const adj = new Map();

    // Initialize in-degree and adjacency list for all unique characters
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

    // Build graph and calculate in-degrees
    for (let i = 1; i < words.length; i++) {
        const w1 = words[i - 1];
        const w2 = words[i];
        const minLen = Math.min(w1.length, w2.length);

        for (let j = 0; j < minLen; j++) {
            const u = w1[j];
            const v = w2[j];

            if (u !== v) {
                // Add edge only if it doesn't exist to avoid duplicates
                if (!adj.get(u).includes(v)) {
                    adj.get(u).push(v);
                    inDegree.set(v, inDegree.get(v) + 1);
                }
                break; // Only the first differing character matters
            }
        }

        // Edge case: invalid prefix (e.g., ["abc", "ab"])
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

    // If result doesn't contain all unique characters, there's a cycle
    if (result.length !== inDegree.size) {
        return "";
    }

    return result.join("");
}

let words = ["wrt", "wrf", "er", "ett", "rftt"]

console.log(alienOrder(words))