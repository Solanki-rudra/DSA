// Pattern: Array, Two Pointers

// LeetCode Problem 15: Three Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

/**
 * @name threeSumBrute
 * @description Brute Force: Try all pairs and check if their sum equals 0.
 * @timeComplexity O(n^3)
 * @spaceComplexity O(n)
 */
function threeSumBrute(nums) {
    let ans = []
    let set = new Set()
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                if(nums[k]+nums[j]+nums[i]==0){
                    let triplets = [nums[k],nums[j],nums[i]]
                    let key = triplets.sort((a,b)=>a-b).join(',')
                    if(!set.has(key)){
                        set.add(key)
                        ans.push(triplets)
                    }
                }
            }
        }
    }
    return ans
}

/**
 * @name threeSumBetter
 * @description Better: using hash set from sorted array.
 * @timeComplexity O(n log n + n^2)
 * @spaceComplexity O(n)
 */
function threeSumBetter(nums) {
    nums.sort((a,b)=>a-b)
    let result = []
    for(let i=0; i<nums.length; i++){
        if(nums[i] > 0) break
        if( i > 0 && nums[i] == nums[i-1]) continue
        let set = new Set()
        for(let j=i+1; j<nums.length; j++){
            let target = 0 - nums[i] - nums[j]
            if(set.has(target)){
                result.push([nums[i],nums[j],target])
                while(j+1 < nums.length && nums[j] == nums[j+1]){
                    j++
                }
            }
            set.add(nums[j])
        }
    }
    return result
}

/**
 * @name threeSumOptimal
 * @description Optimal: Two pointers from both ends of sorted array.
 * @timeComplexity O(n log n + n^2)
 * @spaceComplexity O(1)
 */
function threeSumOptimal(nums) {
    nums.sort((a,b)=>a-b)
    let result = []
    for(let i=0; i<nums.length; i++){
        if(i>0 && nums[i-1] == nums[i]) continue
        if(nums[i] > 0) break
        let l=i+1, r=nums.length-1;
        while(l < r){
            let sum = nums[i] + nums[l] + nums[r]
            if(sum == 0){
                while(l<r && nums[l] == nums[l+1]) l++
                while(l<r && nums[r] == nums[r-1]) r--
                result.push([nums[i],nums[l],nums[r]])
                r--
                l++
            }else if(sum > 0){
                r--
            }
            else{
                l++
            }
        }
    }
    return result
}


// Test
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSumBrute(nums));
console.log(threeSumBetter(nums));
console.log(threeSumOptimal(nums));