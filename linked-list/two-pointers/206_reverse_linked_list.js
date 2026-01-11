// Pattern: Linked List, Two Pointers

// LeetCode Problem 206: Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
* @name reverseListBrute
* @description Brute Force Approach: Use a stack to reverse the linked list.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function reverseListBrute(head) {
    if (head === null) return null
    let stack = []
    let temp = head
    while (temp !== null) {
        stack.push(temp)
        temp = temp.next
    }
    let newHead = stack.pop()
    let current = newHead
    while (stack.length > 0) {
        current.next = stack.pop()
        current = current.next
    }
    current.next = null
    return newHead
}

/**
* @name reverseListOptimal
* @description Optimal Approach: Use three pointers to reverse the linked list.
* @timeComplexity O(n)
* @spaceComplexity O(1)
*/
function reverseListOptimal(head) {
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


// Test
const head = [4, 2, 1, 3];
console.log(reverseListBrute(head));
console.log(reverseListOptimal(head));