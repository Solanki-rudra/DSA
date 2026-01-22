import { LinkedList, ListNode } from "../LinkedList.js"

// Pattern: Linked List, Advanced Structures

// LeetCode Problem 876: Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.

const { arrToList, listToArr } = new LinkedList();

/**
* @name addTwoNumbersBrute
* @description Brute Force Approach: measure the length of the linked list and then find the middle node.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function addTwoNumbersBrute(l1, l2) {
    let n1 = listToArr(l1).reverse().join(""), n2 = listToArr(l2).reverse().join("")
    let sum = String(Number(n1) + Number(n2)).split('').reverse().map(Number)
    return arrToList(sum)
}

/**
* @name addTwoNumbersOptimal
* @description Optimal Approach: Use two pointers to find the middle node in a single pass.
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function addTwoNumbersOptimal(l1, l2) {
    let dummy = new ListNode(-1)
    let curr = dummy
    let carry = 0
    while(l1 !== null || l2 !== null || carry !== 0){
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry
        if(sum > 9){
            carry = Math.floor(sum / 10)
            sum = sum % 10
        }else{
            carry = 0
        }
        curr.next = new ListNode(sum)
        curr = curr.next
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
    return dummy.next
}


// Test
const l1 = [2,4,3], l2 = [5,6,4];

const listHead1 = arrToList(l1);
const listHead2 = arrToList(l2);

console.log(addTwoNumbersBrute(listHead1, listHead2));
console.log(addTwoNumbersOptimal(listHead1, listHead2));