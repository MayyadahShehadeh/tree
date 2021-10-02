"use strict";
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/////// ✅ ✅  ✅ ✅4
class BinaryTree {
    constructor(root) {
        this.root = root;
    }

}

// root - left - right

function preOrder(root) {
    let result = [];

    let traverse = (node) => {
        result.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(root);
    //  recursive function to repeated call same function 
    return result;
}
/////// ✅ ✅  ✅ ✅4
// left - root - right
function inOrder(root) {
    let result = [];
    let traverse = (node) => {
        if (node.left) traverse(node.left);
        result.push(node.value);
        if (node.right) traverse(node.right);
    }
    traverse(root);
    return result;
}
/////// ✅ ✅  ✅ ✅4
// left  - right - root
function postOrder(root) {
    let result = [];
    let traverse = (node) => {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        result.push(node.value);
    }
    traverse(root);
    return result;
}
/////// ✅ ✅  ✅ ✅4
class BinarySearchTree {

    constructor() {
        this.root = null;
    }
    add(value) {
        let node = new Node(value);
       
        let addValue = (current, node) => {
            if (node.value < current.value) {
                if (!current.left) {
                    current.left = node;
                } else {
                    addValue(current.left, node);
                }
            } else {
                if (!current.right) {
                    current.right = node;
                } else {
                    addValue(current.right, node);
                }
            }
        };
        if (!this.root) {
            this.root = node;
        } else {
            addValue(this.root, node);
        }

    }

}
/////// ✅ ✅  ✅ ✅4
function ifContains(root,value){
    if(!root)
    return;
    if(root.value == value) return true;
    
    if(root.value>value){
        if(!root.left) return false;
        else return ifContains(root.left,value)
    }
    else if(root.value<value){
        if(!root.right) return false;
        else return ifContains(root.right,value)
    }
    return false;
}
/////// ✅ ✅  ✅ ✅4 BST

function ifContainsBT(root,value){ // NOOOOOOOOR EDROSY HAYYYYY
    let check=false;
    let checkFUn=(root,value)=>{
        if(!root)
        return false;
        if(root.value == value) check= true;
        
            if(root.left)  check=checkFUn(root.left,value)
            if(root.right) check=checkFUn(root.right,value)
            return check;
    }
  
    checkFUn(root,value)
         return check;
}

function findMaxNumber(root) {
    if (!root)
    return false;

    let max = root.value;

    let lres = findMaxNumber(root.left);
    let rres = findMaxNumber(root.right);
    
    if (lres > max)  max = lres;
    if (rres > max) max = rres;
    return max;
}
function findMinNumber(root) {
    if (!root)
    return ;
    
    let min = root.value;

    let lres = findMinNumber(root.left);
    let rres = findMinNumber(root.right);
    
    if (lres < min)  min = lres;
    if (rres < min) min = rres;
    return min;

}
///////////////////////
 function isSymmetric(root) {
    if (root == null) return true;

     let isMirror =(leftSub, rightSub)=> {
        if (leftSub == null && rightSub == null) return true;
        if (leftSub == null || rightSub == null) return false;
    
        return (leftSub.value === rightSub.value 
                && isMirror(leftSub.left, rightSub.right) 
                && isMirror(leftSub.right, rightSub.left))
    }

    return isMirror(root.left, root.right);
};
//////////////////////////////////////////////
function identicalTrees(a, b)
{

    if (a == null && b == null)
        return true;
   
    if (a != null && b != null)
        return (a.value == b.value
                && identicalTrees(a.left, b.left)
                && identicalTrees(a.right, b.right));

    return false;
}
/////////////////////////////////////////////////////    
function BreadthFirst  (root) {
    const result = [];
    const q = [root];
    if(root){
        while (q.length > 0) {
            let cur = q.shift();
            result.push(cur.value)
            if (cur.left)
                q.push(cur.left)
            if (cur.right)
                q.push(cur.right)
    
        };
        return result

    }
    else return 'Sorry there is no root';
}
//////////////////////////////////////////////////   
function SumofNumbersBT(root) { // for all nodes tree
    let result=0 ;
    const q = [root];
    if(root){
        while (q.length > 0) {
            let cur = q.shift();
            result=result+cur.value;
            if (cur.left)
                q.push(cur.left)
            if (cur.right)
                q.push(cur.right)
    
        };
        return result

    }
    else return 'Sorry there is no root';
}
///////////////////////////////////////////////////
function printZigZagTraversal(rootNode)
{
 let result =[];
    if (!rootNode){return;}

    let currentLevel = [rootNode];
    let nextLevel = [];
    let leftToRight = true;
    while (currentLevel.length > 0)
    {
        let node = currentLevel.pop();
        result.push(node.value)
        if (leftToRight)
        {
            if (node.left){nextLevel.push(node.left); }
            if (node.right ){ nextLevel.push(node.right);}
        }
        else
        {
            if (node.right ){nextLevel.push(node.right);}
            if (node.left){nextLevel.push(node.left);}
        }

        if (currentLevel.length == 0) {
            leftToRight = !leftToRight;
            currentLevel = nextLevel;
            nextLevel = [];
        }
    }
    return result;
}
/////////////////////////////////////////////////////
function sum(node) 
{
    if(!node)
    {
        return false;
    }
    return (sum(node.left) + node.value+sum(node.right));
}
 
function isSumTree(node)//// for each root should be the sum for all child
{
    let ls,rs;

    if(!node || (!node.left && !node.right))  return true;
  
    ls = sum(node.left);
    rs = sum(node.right);
    if((node.value == ls + rs) && isSumTree(node.left) != 0 && isSumTree(node.right) != 0)
    {
        return true;
    }
    return false;
}
//////////////////////////////////////////////
function isLeaf(node)
{
    if (node == null)
        return false;
    if (node.left == null && node.right == null)
        return true;
    return false;
}

function leftLeavesSum(node)
{
 
    let res = 0;
    if (node)
    {
        if (isLeaf(node.left))
            res += node.left.value;
        else 
            res += leftLeavesSum(node.left);
        res += leftLeavesSum(node.right);
    }

    return res;
}
/////////////////////////////////////////

function isLeafRight(node)
{
    if (node == null)
        return false;
    if (node.left == null && node.right == null)
        return true;
    return false;
}

function rightLeavesSum(node)
{
 
    let res = 0;
    if (node)
    {
     
        if (isLeafRight(node.right))
            res += node.right.value;
        else 
            res += rightLeavesSum(node.right);
        res += rightLeavesSum(node.left);
    }

    return res;
}
//////////////////////////////////////////////
function areIdentical(root1, root2)
{
    if (!root1 && !root2 ) return true;
    if (!root1|| !root2) return false;

    return (root1.value == root2.value
            && areIdentical(root1.left, root2.left)
            && areIdentical(root1.right, root2.right));
}

function isSubtree(T,  S)
{
    if (S == null) return true;

    if (T == null)  return false;

    if (areIdentical(T, S))  return true;

    return isSubtree(T.left, S) || isSubtree(T.right, S);
}
////////////////////////////////////////////////////
function  convertmirror(node)
{
    if (node == null)
        return node;

    let left = convertmirror(node.left);
    let right = convertmirror(node.right);

    node.left = right;
    node.right = left;

    return node;
}
/////////////////////////////////////////

function rangeSumBST(root,low,high)
{  
    let sum1 = 0;
    if (!root) return 0;
    let q = [root];
    while (q.length!=0)
    {
        let curr = q.shift();

        if (curr.value >= low && curr.value <= high)
            sum1 += curr.value;
        
        if (curr.left && curr.value > low)
            q.push(curr.left);
  
        if (curr.right != null &&
            curr.value < high)

            q.push(curr.right);
    }
  
    return sum1;
}

////////////////////////////////////////////////
function MergeTrees(t1, t2)
{
    if (t1 == null)
        return t2;
    if (t2 == null)
        return t1;
         
    t1.value += t2.value;
    t1.left = MergeTrees(t1.left, t2.left);
    t1.right = MergeTrees(t1.right, t2.right);
    return t1;
}
/////////////////////////////////////////////////


/////////////////////////////////////// consolsssssssssssssssssssssssssssssssssssssssseeeeeeeeeeeeee
let one = new Node(26);
let two = new Node(10);
let three = new Node(1);
let four = new Node(6);
let five = new Node(4);
let six = new Node(11);
let seven = new Node(4);
// let eight = new Node(8);
// let nine = new Node(9);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = seven;
three.right = six;

let one1 = new Node(10);
let two2 = new Node(6);
let three3 = new Node(4);
let four4 = new Node(3);
let five5 = new Node(3);
let six6 = new Node(4);
let seven7 = new Node(4);
// let eight = new Node(8);
// let nine = new Node(9);

one1.left = two2;
one1.right = three3;
two2.left = four4;
two2.right = six6;
three3.left = seven7;
three3.right = five5;

let root1 =new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right =new  Node(5);
root1.right.right =new  Node(6);

let root2 = new Node(4);
root2.left = new Node(1);
root2.right =new  Node(7);
root2.left.left =new  Node(3);
root2.right.left =new Node(2);
root2.right.right =new Node(6);

console.log('is symmitric ------->',isSymmetric(one));
console.log('identicalTrees',identicalTrees(one, one1));
console.log('isSumTree---->',isSumTree(one));
console.log('leftLeavesSum------->',leftLeavesSum(one));
console.log('rightLeavesSum------->',rightLeavesSum(one));
console.log('isSubtree-------->',isSubtree(one,one1));
console.log(' mirror(root)----------->', convertmirror(one1));
console.log('MergeTrees----------------->',MergeTrees(root1, root2));



// three.left = four;
// three.right = five;
console.log(preOrder(one));
console.log(inOrder(one));
console.log(postOrder(one));
let BST = new BinarySearchTree();
BST.add(5);
BST.add(6);
BST.add(3);
BST.add(4);
BST.add(10);
BST.add(7);
BST.add(8);
BST.add(11);
console.log('rangeSumBST---------------->',rangeSumBST(BST.root,5,8));
// add(BST, 4);
// BST.add(2);
// BST.add(5);
// BST.add(9);
// console.log('max',findMaxNumber(one));
// console.log('min',findMinNumber(one));
// console.log('BreadthFirst',BreadthFirst(one));
// console.log('fizzBuzzTree',fizzBuzzTree(one));
console.log('ifContains',ifContains(BST.root ,9));
console.log('ifContains',ifContains(one,9));
console.log('ifContainsBT',ifContainsBT(one,11));
console.log('ifContainsBST',ifContainsBT(BST.root,11));
