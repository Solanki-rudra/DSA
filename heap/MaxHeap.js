export class MaxHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }
    push(value) {
        this.heap.push(value);
        this.size++;
        this._heapifyUp();
    }
    poll() {
        if (this.size === 0) return null;
        if (this.size === 1) {
            this.size--;
            return this.heap.pop();
        }
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.size--;
        this._heapifyDown();
        return max;
    }
    _heapifyUp() {
        let index = this.size - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) break;
            this._swap(index, parentIndex);
            index = parentIndex;
        }
    }
    _heapifyDown() {
        let index = 0;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let maxIndex = index;
            if (leftChildIndex < this.size && this.heap[leftChildIndex] > this.heap[maxIndex]) {
                maxIndex = leftChildIndex;
            }
            if (rightChildIndex < this.size && this.heap[rightChildIndex] > this.heap[maxIndex]) {
                maxIndex = rightChildIndex;
            }
            if (maxIndex === index) break;
            this._swap(index, maxIndex);
            index = maxIndex;
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