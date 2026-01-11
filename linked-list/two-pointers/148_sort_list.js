// Pattern: Linked List, Two Pointers

// LeetCode Problem 148: Sort List
// Given the head of a linked list, return the list after sorting it in ascending order.

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
console.log(sortListBrute(head));
console.log(sortListOptimal(head));


function listToArr(head) {
    let arr = []
    let curr = head
    while (curr !== null) {
        arr.push(curr.val)
        curr = curr.next
    }
    return arr
}

function ListNode(val, next = null) {
    this.val = val
    this.next = next
}

function arrToList(arr) {
    if (arr.length === 0) return null
    let head = new ListNode(arr[0])
    let current = head
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i])
        current = current.next
    }
    return head
}

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