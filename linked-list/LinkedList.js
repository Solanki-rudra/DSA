export class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

export class _Node {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

export class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
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
    arrToDeepList(arr) {
        if (arr.length === 0) return null;
        const nodes = arr.map(item => new _Node(item[0]));
        for (let i = 0; i < nodes.length; i++) {
            if (i < nodes.length - 1) {
                nodes[i].next = nodes[i + 1];
            }
            if (arr[i][1] !== null) {
                nodes[i].random = nodes[arr[i][1]];
            }
        }
        return nodes[0];
    }
    arrToList2D(arr) {
        if (arr.length === 0) return [];
        const lists = [];
        for (let i = 0; i < arr.length; i++) {
            lists.push(this.arrToList(arr[i]));
        }
        return lists;
    }
    arrToTree(arr) {
        if (arr.length === 0 || arr[0] === null) return null;
        const root = new TreeNode(arr[0]);
        const queue = [root];
        let i = 1; 
        while (i < arr.length) {
            const current = queue.shift();
            if (i < arr.length && arr[i] !== null) {
                current.left = new TreeNode(arr[i]);
                queue.push(current.left);
            }
            i++;
            if (i < arr.length && arr[i] !== null) {
                current.right = new TreeNode(arr[i]);
                queue.push(current.right);
            }
            i++;
        }
        return root;
    }
}