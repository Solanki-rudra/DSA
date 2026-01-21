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

/**
* @name reverseKGroupOptimal
* @description Optimal Approach: Reverse k nodes at a time using two pointers.
* @timeComplexity O(n)
* @spaceComplexity O(1)
*/
function reverseKGroupOptimal(head, k) {
    let dummy = new ListNode()
    dummy.next = head
    let groupPrev = dummy
    while (true) {
        let kth = groupPrev
        for (let i = 0; i < k; i++) {
            kth = kth.next
            if (!kth) return dummy.next
        }
        let nextHead = kth.next
        let prev = nextHead
        let curr = groupPrev.next
        while (curr !== nextHead) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        let temp = groupPrev.next
        groupPrev.next = kth
        groupPrev = temp
    }
}


// Test
const head = [1, 2, 3, 4, 5], k = 2

const listHead = arrToList(head);

console.log(reverseKGroupBrute(listHead, k));
console.log(reverseKGroupOptimal(listHead, k));