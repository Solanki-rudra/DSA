import { MaxHeap } from "../MaxHeap.js"

// Pattern: Heap, Max-Heap

// LeetCode Problem 355: Design Twitter
// Design a simplified version of Twitter where users can post tweets, follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed. Your design should support the following methods:

// postTweet(userId, tweetId): Compose a new tweet.
// getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
// follow(followerId, followeeId): Follower follows a followee.
// unfollow(followerId, followeeId): Follower unfollows a followee.


class LinkedNode {
    constructor(val = null, time = null, next = null) {
        this.val = val
        this.time = time
        this.next = next
    }
}

let globelTime = 0

var User = function (id) {
    this.id = id
    this.tweetHead = null
    this.followed = new Set()
    this.followed.add(id)
}

User.prototype.post = function (id) {
    let newTweet = new LinkedNode(id, globelTime++)
    newTweet.next = this.tweetHead
    this.tweetHead = newTweet
}

User.prototype.follow = function (id) {
    this.followed.add(id)
}

User.prototype.unfollow = function (id) {
    this.followed.delete(id)
}

var Twitter = function () {
    this.hashMap = new Map()
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    if (!this.hashMap.has(userId)) {
        let newUser = new User(userId)
        this.hashMap.set(userId, newUser)
    }
    this.hashMap.get(userId).post(tweetId)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    if (this.hashMap.has(userId)) {
        let tweets = new MaxHeap((a,b) => a.time - b.time)
        for (let id of this.hashMap.get(userId).followed) {
            if (!this.hashMap.has(id)) continue
            let curr = this.hashMap.get(id).tweetHead
            if(curr){
                tweets.push(curr)
            }
        }
        let res = []
        while (res.length < 10 && tweets.size > 0) {
            let top = tweets.poll()
            res.push(top.val)
            if(top.next){
                tweets.push(top.next)
            }
        }
        return res
    }
    return []
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.hashMap.has(followerId)) {
        let newUser = new User(followerId)
        this.hashMap.set(followerId, newUser)
    }
    this.hashMap.get(followerId).follow(followeeId)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (this.hashMap.has(followerId)) {
        this.hashMap.get(followerId).unfollow(followeeId)
    }
};

var obj = new Twitter()
obj.postTweet(1, 5)
console.log(obj.getNewsFeed(1)) // [5]
obj.follow(1, 2)
obj.postTweet(2, 6)
console.log(obj.getNewsFeed(1)) // [6, 5]
obj.unfollow(1, 2)
console.log(obj.getNewsFeed(1)) // [5]