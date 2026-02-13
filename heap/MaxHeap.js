export class MaxHeap {
    constructor(cap = Infinity, compare = (a, b) => a - b) {
        this.heap = [];
        this.size = 0;
        this.cap = cap;
        this.compare = compare; // >0 means a > b
    }

    push(value) {
        if (this.size >= this.cap) {
            throw new Error("MaxHeap is at capacity");
        }
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

            if (this.compare(this.heap[index], this.heap[parentIndex]) <= 0) break;

            this._swap(index, parentIndex);
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;

        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let maxIndex = index;

            if (left < this.size && this.compare(this.heap[left], this.heap[maxIndex]) > 0) {
                maxIndex = left;
            }

            if (right < this.size && this.compare(this.heap[right], this.heap[maxIndex]) > 0) {
                maxIndex = right;
            }

            if (maxIndex === index) break;

            this._swap(index, maxIndex);
            index = maxIndex;
        }
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    peek() {
        return this.size === 0 ? null : this.heap[0];
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}