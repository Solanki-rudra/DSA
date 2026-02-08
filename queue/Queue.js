export class Queue {
    constructor() {
        this.items = [];
        this.size = 0;
    }
    push(ele) {
        this.items.push(ele);
        this.size++;
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.size--;
        return this.items.shift();
    }
    isEmpty() {
        return this.size === 0;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }
    length() {
        return this.size;
    }
}