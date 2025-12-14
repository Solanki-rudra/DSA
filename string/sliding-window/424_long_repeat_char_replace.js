// Pattern: String, Sliding Window

// LeetCode Problem 424: Longest Repeating Character Replacement
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.


/**
 * @name characterReplacementBrute
 * @description Brute Force Approach: Check every substring and calculate the max frequency character.
 * @timeComplexity O(n^2)
 * @spaceComplexity O(1)
 */
function characterReplacementBrute(s, k) {
   let result = 0
    for(let i=0; i<s.length; i++){
        let maxChar = 1
        let strHash = {}
        for(let j=i; j<s.length; j++){
            strHash[s[j]] = (strHash[s[j]] || 0) + 1
            maxChar = Math.max(maxChar, strHash[s[j]])
            let strLength = j - i +1
            if(strLength - maxChar <= k){
                result = Math.max(result, strLength)
            }else{
                break
            }
        }
    }
    return result
}


/**
 * @name characterReplacementOptimal
 * @description Optimal Approach: Maintain the most frequent character count and shrink the window when replacements exceed k.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
function characterReplacementOptimal(s, k) {
    if(s.length < 1) return 0
    let result = 1
    let strHash = {}
    let maxChar = 1
    let left = 0;
    let right = 0;
    while(right < s.length && left < s.length){
        strHash[s[right]] = ( strHash[s[right]] || 0) + 1
        maxChar = Math.max(maxChar, strHash[s[right]])
        while(right-left+1-maxChar>k){
            strHash[s[left]]--
            left++
        }
        result = Math.max(result, right-left+1)
        right++
    }
    return result
}


// Test
let s = "ABAB", k = 2;
console.log(characterReplacementBrute(s, k));      // 4
console.log(characterReplacementOptimal(s, k));    // 4