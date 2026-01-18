export class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
    }
    arrToList(arr) {
        if (arr.length === 0) return null;
        const head = new ListNode(arr[0]);
        let current = head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }
    listToArr(head) {
        const arr = [];
        let current = head;
        while (current !== null) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
    createCycle(head, pos) {
        if (pos < 0) return head;
        let cycleStart = head
        for (let i = 0; i < pos; i++) {
            cycleStart = cycleStart.next
        }
        let tail = head
        while (tail.next !== null) {
            tail = tail.next
        }
        tail.next = cycleStart
        return head
    }
}