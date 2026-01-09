// Pattern: Linked List, Two Pointers

// LeetCode Problem 876: Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.

/**
* @name middleNodeBrute
* @description Brute Force Approach: measure the length of the linked list and then find the middle node.
* @timeComplexity O(n)
* @spaceComplexity O(1)
*/
function middleNodeBrute(head) {
    if (head === null) return null
    let temp = head
    let len = 0
    while (temp !== null) {
        len++
        temp = temp.next
    }
    let mid = Math.floor(len / 2)
    let ans = head
    while (mid > 0) {
        ans = ans.next
        mid--
    }
    return ans
}

/**
* @name middleNodeOptimal
* @description Optimal Approach: Use two pointers to find the middle node in a single pass.
* @timeComplexity O(n)
* @spaceComplexity O(1)
*/
function middleNodeOptimal(head) {
    if (head === null) return null
    let i = head, j = head
    while (j.next !== null && j.next.next !== null) {
        i = i.next
        j = j.next.next
    }
    if (j.next !== null) i = i.next
    return i
}


// Test
const head = [4, 2, 1, 3];
console.log(middleNodeBrute(head));
console.log(middleNodeOptimal(head));