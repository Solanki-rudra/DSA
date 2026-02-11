export class MinHeap {
    constructor(cap = Infinity) {
        this.heap = [];
        this.size = 0;
        this.capacity = cap;
    }
    push(value) {
        // if heap not full → normal push
        if (this.size < this.capacity) {
            this.heap.push(value);
            this.size++;
            this._heapifyUp();
            return;
        }

        // heap full
        if (value <= this.peek()) return;

        // replace min
        this.heap[0] = value;
        this._heapifyDown();
    }
    poll() {
        if (this.size === 0) return null;
        if (this.size === 1) {
            this.size--;
            return this.heap.pop();
        }
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.size--;
        this._heapifyDown();
        return min;
    }
    _heapifyUp() {
        let index = this.size - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            this._swap(index, parentIndex);
            index = parentIndex;
        }
    }
    _heapifyDown() {
        let index = 0;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let minIndex = index;
            if (leftChildIndex < this.size && this.heap[leftChildIndex] < this.heap[minIndex]) {
                minIndex = leftChildIndex;
            }
            if (rightChildIndex < this.size && this.heap[rightChildIndex] < this.heap[minIndex]) {
                minIndex = rightChildIndex;
            }
            if (minIndex === index) break;
            this._swap(index, minIndex);
            index = minIndex;
        }
    }
    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    isEmpty() {
        return this.size === 0;
    }
    peek() {
        return this.size === 0 ? null : this.heap[0];
    }
    getSize() {
        return this.size;
    }
}