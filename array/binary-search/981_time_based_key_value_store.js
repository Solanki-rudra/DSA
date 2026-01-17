// Pattern: Array, Binary Search

// LeetCode Problem 981: Time Based Key-Value Store
// Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

/**
 * @name TimeMap
 * @description Initializes the TimeMap object.
 * @timeComplexity O(1)
 * @spaceComplexity O(n)
 */
var TimeMap = function () {
    this.store = new Map()
};

/**
 * @name set
 * @description Sets a key-value pair with a timestamp.
 * @timeComplexity O(1)
 * @spaceComplexity O(1)
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.store.has(key)) {
        this.store.set(key, [])
    }
    let values = this.store.get(key)
    values.push([timestamp, value])
};

/**
 * @name get
 * @description Gets a key-value pair with a timestamp.
 * @timeComplexity O(1)
 * @spaceComplexity O(log n)
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (!this.store.has(key)) {
        return ""
    }
    let values = this.store.get(key)
    let ans = ""
    let left = 0, right = values.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let [curTime, curVal] = values[mid]
        if (curTime <= timestamp) {
            ans = curVal
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return ans
};

var obj = new TimeMap()
obj.set("foo", "bar", 1)
obj.set("foo", "bar2", 4)
obj.set("r", "bar3", 5)
obj.set("foo", "bar4", 7)
var param_2 = obj.get("foo", 3)
console.log(param_2);