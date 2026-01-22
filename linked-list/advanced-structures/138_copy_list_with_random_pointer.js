import { _Node, LinkedList } from "../LinkedList.js"

// Pattern: Linked List, Advanced Structures

// LeetCode Problem 138: Copy List with Random Pointer
// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

/**
* @name copyRandomListBrute
* @description Brute Force Approach: Use a hash map to store the mapping from original nodes to their copies.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function copyRandomListBrute(head) {
    let hashMap = new Map()
    let curr = head
    while (curr !== null) {
        let newNode = new _Node(curr.val, null, null)
        hashMap.set(curr, newNode)
        curr = curr.next
    }
    curr = head
    while (curr !== null) {
        let node = hashMap.get(curr)
        node.next = hashMap.get(curr.next) || null
        node.random = hashMap.get(curr.random) || null
        curr = curr.next
    }
    return hashMap.get(head)
}

/**
* @name copyRandomListOptimal
* @description Optimal Approach: Interweave the copied nodes with the original nodes to avoid using extra space.
* @timeComplexity O(n)
* @spaceComplexity O(1)
*/
function copyRandomListOptimal(head) {
    let curr = head
    while (curr !== null) {
        let copyNode = new _Node(curr.val)
        copyNode.next = curr.next
        curr.next = copyNode
        curr = copyNode.next
    }
    curr = head
    while (curr !== null) {
        let copyNode = curr.next
        copyNode.random = curr.random ? curr.random.next : null
        curr = curr.next.next
    }
    curr = head
    let dummy = new _Node(-1)
    let copyCurr = dummy
    while (curr !== null) {
        copyCurr.next = curr.next
        curr.next = curr.next.next
        copyCurr = copyCurr.next
        curr = curr.next
    }
    return dummy.next
}


// Test
const head = [[7,null],[13,0],[11,4],[10,2],[1,0]]

const linkedList = new LinkedList();
const listHead1 = linkedList.arrToDeepList(head);
const listHead2 = linkedList.arrToDeepList(head);

console.log(copyRandomListBrute(listHead1));
console.log(copyRandomListOptimal(listHead2));