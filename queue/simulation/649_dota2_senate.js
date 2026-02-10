import { Queue } from "../Queue.js";

// Pattern: Stack, Expression Evaluation

// LeetCode Problem 649: Dota2 Senate
// In the world of Dota2, there are two parties: the Radiant and the Dire.
// The Dota2 senate consists of senators coming from two parties. Now the senate wants to make a decision about a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise one of the two rights:

/**
* @name predictPartyVictoryBrute
* @description Approach: Simulate the process using a queue. In each round, each senator votes to ban one senator from the opposite party. If a senator cannot find any opponent to ban, they win.
* @timeComplexity O(n^2)
* @spaceComplexity O(n)
*/
function predictPartyVictoryBrute(senate) {
    let arr = senate.split("");
    while (true) {
        let alive = new Array(arr.length).fill(true);
        for (let i = 0; i < arr.length; i++) {
            if (!alive[i]) continue;
            let party = arr[i];
            let target = party === "R" ? "D" : "R";
            let found = false;
            for (let step = 1; step <= arr.length; step++) {
                let j = (i + step) % arr.length;

                if (alive[j] && arr[j] === target) {
                    alive[j] = false;
                    found = true;
                    break;
                }
            }
            if (!found) {
                return party === "R" ? "Radiant" : "Dire";
            }
        }
        let next = [];
        for (let i = 0; i < arr.length; i++) {
            if (alive[i]) next.push(arr[i]);
        }
        arr = next;
    }
}

/**
* @name predictPartyVictoryOptimal
* @description Approach: Simulate the process using two queues to track the indices of each party's senators. In each round, the earliest senator from each party bans the earliest senator from the opposite party. The banned senator is removed from their queue, and the surviving senator is added back to their queue with an incremented index (to simulate a later round).
* @timeComplexity O(n)
* @spaceComplexity O(n)
*/
function predictPartyVictoryOptimal(senate) {
    let n = senate.length
    let rQ = new Queue()
    let dQ = new Queue()
    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            rQ.push(i)
        } else {
            dQ.push(i)
        }
    }
    while (rQ.length() !== 0 && dQ.length() !== 0) {
        let r = rQ.pop()
        let d = dQ.pop()
        if (r < d) {
            rQ.push(r + n)
        } else {
            dQ.push(d + n)
        }
    }
    return rQ.isEmpty() ? 'Dire' : 'Radiant'
}

// Test
let senate = "RDDRDR"

console.log(predictPartyVictoryBrute(senate));
console.log(predictPartyVictoryOptimal(senate));