import { LinkedList, ListNode } from "../LinkedList.js"

// Pattern: Linked List, Merge and Sort

// LeetCode Problem 148: Sort List
// Given the head of a linked list, return the list after sorting it in ascending order.

const linkedList = new LinkedList();
const { arrToList, listToArr } = linkedList;

/**
* @name sortListBrute
* @description Brute Force Approach: Convert linked list to array, sort the array, and convert back to linked list.
* @timeComplexity O(n log n)
* @spaceComplexity O(n)
*/
function sortListBrute(head) {
    let arr = listToArr(head)
    arr.sort((a, b) => a - b)
    return arrToList(arr)
}

/**
* @name sortListOptimal
* @description Optimal Approach: Use merge sort to sort the linked list.
* @timeComplexity O(n log n)
* @spaceComplexity O(log n)
*/
function sortListOptimal(head) {
    if (head === null || head.next === null) return head
    let { first, second } = breakList(head)
    return mergeSortedList(sortListOptimal(first), sortListOptimal(second))
}


// Test
const head = [4, 2, 1, 3];

const listHead = arrToList(head);

console.log(sortListBrute(listHead));
console.log(sortListOptimal(listHead));

function breakList(head) {
    let left = head, right = head.next
    while (right !== null && right.next !== null) {
        left = left.next
        right = right.next.next
    }
    let second = left.next
    left.next = null
    return { first: head, second }
}

function mergeSortedList(l1, l2) {
    let dummy = new ListNode(-1)
    let temp = dummy
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            temp.next = l1
            l1 = l1.next
        } else {
            temp.next = l2
            l2 = l2.next
        }
        temp = temp.next
    }
    temp.next = l1 || l2
    return dummy.next
}