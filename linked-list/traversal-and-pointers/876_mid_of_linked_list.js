import { LinkedList } from "../LinkedList.js"

// Pattern: Linked List, Traversal and Pointers

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
    if(head === null) return null
    let slow = head, fast = head
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}


// Test
const head = [4, 2, 1, 3];

const linkedList = new LinkedList();
const listHead1 = linkedList.arrToList(head);
const listHead2 = linkedList.arrToList(head);

console.log(middleNodeBrute(listHead1));
console.log(middleNodeOptimal(listHead2));