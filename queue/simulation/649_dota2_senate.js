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

// Test
let senate = "RDD"

console.log(predictPartyVictoryBrute(senate));