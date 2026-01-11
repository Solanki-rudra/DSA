// Pattern: Linked List, Two Pointers

// LeetCode Problem 143: Reorder List
// Given the head of a singly linked list, reorder the list such that it follows the pattern: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...

/**
* @name reorderListBrute
* @description Brute Force Approach: measure the length of the linked list and then find the middle node.
* @timeComplexity O(n)
* @spaceComplexity O(1)
*/
function reorderList(head) {
    let i = head, j = head
    while (j !== null && j.next !== null) {
        i = i.next
        j = j.next.next
    }
    let second = i.next
    i.next = null
    let revHead = reverseList(second)
    let curr = head
    while (curr !== null && revHead !== null) {
        let tempCurr = curr.next
        curr.next = revHead

        let tempRev = revHead.next
        revHead.next = tempCurr

        revHead = tempRev
        curr = tempCurr
    }
}

// Test
const head = [4, 2, 1, 3];
console.log(reorderList(head));



function reverseList(head) {
    if (head === null) return null
    let prev = null
    let curr = head
    while (curr !== null) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
}