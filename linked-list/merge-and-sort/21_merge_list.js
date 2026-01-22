import { LinkedList, ListNode } from "../LinkedList.js"

// Pattern: Linked List, Merge and Sort

// LeetCode Problem 21: Merge Two Sorted Lists
// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

const linkedList = new LinkedList();
const { arrToList, listToArr } = linkedList;

/**
* @name mergeTwoListsBrute
* @description Brute Force Approach: Convert both linked lists to arrays, merge and sort the arrays, then convert back to a linked list.
* @timeComplexity O(n log n)
* @spaceComplexity O(n)
*/
function mergeTwoListsBrute(list1, list2) {
    let arr1 = listToArr(list1)
    let arr2 = listToArr(list2)
    let arr = [...arr1, ...arr2]
    arr.sort((a, b) => a - b)
    return arrToList(arr)
}

/**
* @name mergeTwoListsOptimal
* @description Optimal Approach: Use two pointers to traverse both lists and merge them in sorted order.
* @timeComplexity O(n)
* @spaceComplexity O(1)
*/
function mergeTwoListsOptimal(list1, list2) {
    let i = list1, j = list2
    let ans = new ListNode(-1)
    let temp = ans
    while (i !== null && j !== null) {
        if (i.val < j.val) {
            temp.next = i
            i = i.next
        } else {
            temp.next = j
            j = j.next
        }
        temp = temp.next
    }
    if (i !== null) {
        temp.next = i
    } else {
        temp.next = j
    }
    return ans.next
}

// Test
const list1 = [1, 2, 4], list2 = [1, 3, 4]

const l1 = arrToList(list1);
const l2 = arrToList(list2);

console.log(mergeTwoListsBrute(l1, l2));
console.log(mergeTwoListsOptimal(l1, l2));