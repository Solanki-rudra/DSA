// Pattern: Linked List, Two Pointers

// LeetCode Problem 21: Merge Two Sorted Lists
// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

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

// Test
const list1 = [1,2,4], list2 = [1,3,4]
console.log(mergeTwoListsBrute(list1, list2));



function listToArr(head) {
    let arr = []
    let temp = head
    while (temp !== null) {
        arr.push(temp.val)
        temp = temp.next
    }
    return arr
}

function Node(val, next = null) {
    this.val = val
    this.next = next
}

function arrToList(arr) {
    if (arr.length === 0) return null
    let head = new Node(arr[0])
    let curr = head
    for (let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i])
        curr = curr.next
    }
    return head
}