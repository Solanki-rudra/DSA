import { LinkedList } from "../LinkedList.js"

// Pattern: Linked List, Two Pointers

// LeetCode Problem 141: Linked List Cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

/**
* @name hasCycleBrute
* @description Brute Force Approach: Use a set to track visited nodes.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function hasCycleBrute(head) {
    let visited = new Set()
    let curr = head
    while (curr !== null) {
        if (visited.has(curr)) {
            return true
        } else {
            visited.add(curr)
        }
        curr = curr.next
    }
    return false
}

/**
* @name hasCycleOptimal
* @description Optimal Approach: Use two pointers (Floyd's Tortoise and Hare Algorithm).
* @timeComplexity O(n)
* @spaceComplexity O(1)
*/
function hasCycleOptimal(head) {
    if (head == null || head.next == null) return false
    let slow = head
    let fast = head.next
    while (fast !== null && fast.next !== null) {
        if (slow == fast) return true
        slow = slow.next
        fast = fast.next.next
    }
    return false
}


// Test
const head = [3, 2, 0, -4];
const linkedList = new LinkedList();
const listHead1 = linkedList.createCycle(linkedList.arrToList(head), 1);
const listHead2 = linkedList.createCycle(linkedList.arrToList(head), -1);

console.log(hasCycleBrute(listHead1));
console.log(hasCycleOptimal(listHead2));