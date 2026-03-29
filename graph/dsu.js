export class DSU {
    constructor() {
        this.parent = new Map()
        this.size = new Map()
    }

    makeSet(x) {
        if (!this.parent.has(x)) {
            this.parent.set(x, x)
            this.size.set(x, 1)
        }
    }

    find(x) {
        if (this.parent.get(x) !== x) {
            this.parent.set(x, this.find(this.parent.get(x)))
        }
        return this.parent.get(x)
    }

    union(x, y) {
        this.makeSet(x)
        this.makeSet(y)

        let px = this.find(x)
        let py = this.find(y)

        if (px === py) return false

        let sizeX = this.size.get(px)
        let sizeY = this.size.get(py)

        if (sizeX >= sizeY) {
            this.parent.set(py, px)
            this.size.set(px, sizeX + sizeY)
        } else {
            this.parent.set(px, py)
            this.size.set(py, sizeX + sizeY)
        }

        return true
    }
}