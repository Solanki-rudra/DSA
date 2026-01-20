import { LinkedList } from "../LinkedList.js"

// Pattern: Linked List, Two Pointers

// LeetCode Problem 25: Reverse Nodes in k-Group
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

const { arrToList, listToArr } = new LinkedList();

/**
* @name reverseKGroupBrute
* @description Brute Force Approach: Convert to array, reverse in chunks of k, and convert back to linked list.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function reverseKGroupBrute(head, k) {
    let arr = listToArr(head)
    if (arr.length < k || k < 2) return head
    for (let i = 0; i + k <= arr.length; i += k) {
        let l = i, r = i + k - 1
        while (l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++
            r--
        }
    }
    return arrToList(arr)
}


// Test
const head = [1, 2, 3, 4, 5], k = 2

const listHead = arrToList(head);

console.log(reverseKGroupBrute(listHead, k));