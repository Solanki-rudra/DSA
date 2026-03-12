import { Tree, TreeNode } from '../Tree.js'
import { Queue } from '../../queue/Queue.js'

// Pattern: Tree, BFS

// LeetCode Problem 297: Serialize and Deserialize Binary Tree
// Design an algorithm to serialize and deserialize a binary tree.

/**
 * @name serialize
 * @description : Encodes a binary tree to a single string.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(w) where w is the maximum width of the tree (i.e., the number of nodes in the widest level)
 */
var serialize = function(root) {
    if(root === null) return ""
    let str = ""
    let q = new Queue()
    q.push(root)
    while(q.length()){
        let node = q.pop()
        if(node === null) str += '#,'
        else str += `${node.val},`
        if(node !== null){
            q.push(node.left)
            q.push(node.right)
        }
    }
    return str
};


/**
 * @name deserialize
 * @description : Decodes your encoded data to tree.
 * @timeComplexity O(n) where n is the number of nodes in the tree
 * @spaceComplexity O(w) where w is the maximum width of the tree (i.e., the number of nodes in the widest level)
 */
var deserialize = function(data) {
    if(data === "") return null
    let arr = []
    let val = ""
    for(let i = 0; i < data.length; i++){
        if(data[i] === ','){
            arr.push(val === '#' ? null : Number(val))
            val = ""
        }else{
            val += data[i]
        }
    }
    let root = new TreeNode(arr[0])
    let q = new Queue()
    q.push(root)
    for(let j = 1; j<arr.length; j++){
        let parent = q.pop()
        if(arr[j] !== null){
            let left = new TreeNode(arr[j])
            parent.left = left
            q.push(left)
        }
        if(arr[++j] !== null){
            let right = new TreeNode(arr[j])
            parent.right = right
            q.push(right)
        }
    }
    return root
};

const root = new Tree().arrToTree([1,2,3,null,null,4,5])

const data = serialize(root)
const tree = deserialize(data)

console.log(data)
console.log(serialize(tree))