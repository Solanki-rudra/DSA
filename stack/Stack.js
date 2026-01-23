class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }
    push(element) {
        this.items.push(element);
        this.size++;
    }
    pop() {
        if (this.isEmpty())
            return undefined;
        this.size--;
        return this.items.pop();
    }
    isEmpty() {
        return this.size === 0;
    }
    peek() {
        if (this.isEmpty())
            return undefined;
        return this.items[this.size - 1];
    }
}