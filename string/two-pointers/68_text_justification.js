// Pattern: String, Two Pointers
// LeetCode Problem 68: Text Justification
// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

/**
 * @name fullJustify
 * @description Two Pointers Approach: Justify text using two pointers to manage lines.
 * @timeComplexity O(n)
 * @spaceComplexity O(n)
 */
function fullJustify(words, maxWidth) {
    let l = 0, r = 0;
    let count = 0;
    let collect = [];
    let ans = [];

    while (r < words.length) {
        let len = words[r].length;

        if (count === 0 ? len <= maxWidth : count + len + 1 <= maxWidth) {
            count = count === 0 ? len : count + len + 1;
            r++;
        } else {
            collect.push([l, r - 1]);
            l = r;
            count = 0;
        }
    }
    collect.push([l, r - 1]);

    for (let i = 0; i < collect.length; i++) {
        let [start, end] = collect[i];
        let isLast = i === collect.length - 1;

        let totalWordLen = 0;
        for (let j = start; j <= end; j++) {
            totalWordLen += words[j].length;
        }

        let gaps = end - start;
        let line = "";

        if (isLast || gaps === 0) {
            for (let j = start; j <= end; j++) {
                line += words[j];
                if (j < end) line += " ";
            }
            line += " ".repeat(maxWidth - line.length);
        }
        else {
            let totalSpaces = maxWidth - totalWordLen;
            let spaceEach = Math.floor(totalSpaces / gaps);
            let extra = totalSpaces % gaps;

            for (let j = start; j <= end; j++) {
                line += words[j];
                if (j < end) {
                    line += " ".repeat(spaceEach + (extra > 0 ? 1 : 0));
                    if (extra > 0) extra--;
                }
            }
        }

        ans.push(line);
    }

    return ans;
}

let words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
console.log(fullJustify(words, maxWidth))