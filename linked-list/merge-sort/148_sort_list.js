// Pattern: Linked List, Merge Sort

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


// Test
const head = [4, 2, 1, 3];
console.log(sortListBrute(head));


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