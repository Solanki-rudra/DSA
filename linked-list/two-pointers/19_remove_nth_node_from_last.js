import { LinkedList, ListNode } from "../LinkedList.js"

// Pattern: Linked List, Two Pointers

// LeetCode Problem 19: Remove Nth Node From End of List
// Given the head of a singly linked list, remove the nth node from the end of the list and return its head.

/**
* @name removeNthFromEndBrute
* @description Brute Force Approach: measure the length of the linked list and then find the middle node.
* @timeComplexity O(n)
* @spaceComplexity O(1)
*/
function removeNthFromEndBrute(head, n) {
    if (head === null) return null
    let len = 0
    let curr = head
    while (curr !== null) {
        len++
        curr = curr.next
    }
    if (len === n) return head.next
    curr = head
    for (let i = 0; i < len - n - 1; i++) {
        curr = curr.next
    }
    curr.next = curr.next.next
    return head
}

/**
* @name removeNthFromEndOptimal
* @description Optimal Approach: Use two pointers to find the middle node in a single pass.
* @timeComplexity O(n)
* @spaceComplexity O(1)
*/
function removeNthFromEndOptimal(head) {
    if (head === null) return null
    let dummy = new ListNode(-1, head)
    let front = dummy, back = dummy
    for(let i = 0; i<=n; i++){
        front = front.next
    }
    while(front !== null){
        front = front.next
        back = back.next
    }
    back.next = back.next.next
    return dummy.next
}


// Test
const head = [1, 2, 3, 4, 5], n = 4;

const linkedList = new LinkedList();
const listHead1 = linkedList.arrToList(head);
const listHead2 = linkedList.arrToList(head);

console.log(removeNthFromEndBrute(listHead1, n));
console.log(removeNthFromEndOptimal(listHead2, n));