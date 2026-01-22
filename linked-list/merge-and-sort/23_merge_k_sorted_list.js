import { LinkedList, ListNode } from "../LinkedList.js"

// Pattern: Linked List, Merge and Sort

// LeetCode Problem 23: Merge k Sorted Lists
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

const linkedList = new LinkedList();

/**
* @name mergeKListsBrute
* @description Brute Force Approach: Merge all lists into one and sort the merged list.
* @timeComplexity O(n log n)
* @spaceComplexity O(n)
*/
function mergeKListsBrute(lists) {
    if (lists.length == 0) return null
    let dummy = new ListNode(-1)
    let curr = dummy
    for (let list of lists) {
        curr.next = list
        while (curr.next) curr = curr.next
    }
    return sortList(dummy.next)
}

/**
* @name mergeKListsOptimal
* @description Optimal Approach: Use divide and conquer to merge lists pairwise.
* @timeComplexity O(n log k)
* @spaceComplexity O(log k)
*/
function mergeKListsOptimal(lists) {
    if (lists.length === 0) return null
    while (lists.length > 1) {
        let merged = []
        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i]
            let l2 = i + 1 < lists.length ? lists[i + 1] : null
            merged.push(mergeSortedList(l1, l2))
        }
        lists = merged
    }
    return lists[0]
}


// Test
const lists = [[1, 4, 5], [1, 3, 4], [2, 6]]

const listHead = linkedList.arrToList2D(lists);

console.log(mergeKListsBrute(listHead));
console.log(mergeKListsOptimal(listHead));

function sortList(head) {
    if (head === null || head.next === null) return head
    let slow = head, fast = head.next
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    let second = slow.next
    slow.next = null
    return mergeSortedList(sortList(head), sortList(second))
}

function mergeSortedList(l1, l2) {
    let dummy = new ListNode(-1)
    let curr = dummy
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            curr.next = l1
            l1 = l1.next
        } else {
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }
    curr.next = l1 || l2
    return dummy.next
}