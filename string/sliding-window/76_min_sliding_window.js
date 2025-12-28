// Pattern: String, Sliding Window

// LeetCode Problem 76: Minimum Window Substring
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

/**
 * @name minWindowBrute
 * @description Brute Force Approach: Check every substring and verify character frequencies.
 * @timeComplexity O(n^3)
 * @spaceComplexity O(n)
 */
function minWindowBrute(s, t) {
let result = ""
    let minLen = Infinity
    let tFreq = {}
    for(let c of t){
        tFreq[c] = (tFreq[c] || 0) + 1
    }
    for(let i = 0; i<s.length; i++){
        let sFreq = {}
        for(let j=i; j<s.length; j++){
            sFreq[s[j]] = (sFreq[s[j]] || 0) + 1 
            if(isMatch(sFreq, tFreq)){
                let len = j - i + 1
                if(minLen > len){
                    minLen = len
                    result = s.slice(i, j+1)
                }
                break
            }
        }
    }
    return result
}

function isMatch(sFreq, tFreq){
    for(let c in tFreq){
        if(!sFreq[c] || sFreq[c] < tFreq[c]){
            return false
        }
    }
    return true
}

/**
 * @name minWindowOptimal
 * @description Optimal Approach: Maintain frequency maps and shrink the window when all required characters are satisfied.
 * @timeComplexity O(n)
 * @spaceComplexity O(s + t)
 */
function minWindowOptimal(s, t) {
    let sl = s.length, tl = t.length;
    if(sl == 0 || tl == 0 || sl < tl) return ""

    let tFreq = {}
    let reqCount = 0
    for(let ch of t){
        if(tFreq[ch] !== undefined){
            tFreq[ch]++
        }else{
            tFreq[ch] = 1
            reqCount++
        }
    }

    let l = 0, r = 0;
    let count = 0;
    let minLen = Infinity;
    let window = {}
    let ans = {l:0, r:0}

    while(r < sl){
        let ch = s[r]
        window[ch] = (window[ch] || 0) + 1

        if(tFreq[ch] && tFreq[ch] == window[ch]){
            count++
        }

        while(count == reqCount){
            let len = r - l + 1
            if(len < minLen){
                minLen = len
                ans.l = l
                ans.r = r
            }
            let leftCh = s[l]
            window[leftCh]--
            if(tFreq[leftCh] && window[leftCh] < tFreq[leftCh]){
                count--
            }
            l++
        }
        r++
    }
    if(minLen == Infinity) return ""
    return s.slice(ans.l, ans.r + 1)
}


// Test
let s = "ADOBECODEBANC", t = "ABC";
console.log(minWindowBrute(s, t));
console.log(minWindowOptimal(s, t));