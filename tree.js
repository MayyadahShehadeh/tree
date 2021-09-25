"use strict";
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
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

function contains(root, value) {
    if (!root) {
        console.log('in roooot');
        return false;
    }
    let searchValue = (current, value) => {
        if (current.value === value) {
            return true;
        } else if (current.value > value) {
            if (!current.left) {
                return false;
            }
            return searchValue(current.left, value);
        } else {
            if (!current.right) {
                return false;
            }
            return searchValue(current.right, value);
        }
    };

    return searchValue(root, value);
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
function fizzBuzzTree(root) {
    const result =[]; 
        let FBT = (node) => {
            if(node){  
              if (node.left) 
              {  
                  FBT(node.left); 
              }
                        if (node.value % 15 === 0) 
                        {   
                            result.push('FizzBuzz')
                        }
                        else if (node.value % 5 === 0) {
                            result.push('Buzz')
                            }
                        else if (node.value % 3 === 0) {
                            
                            result.push('Fizz')
                            }
                            else{
                                result.push(node.value) 
                            }

                if (node.right) { 
                    FBT(node.right); }     
                  };
            }
            FBT(root);
            return result ;
};
    
function SumofNumbersBT(root) {
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
    
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
two.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;
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

// add(BST, 4);
// BST.add(2);
// BST.add(5);
// BST.add(9);
console.log('max',findMaxNumber(one));
console.log('min',findMinNumber(one));
console.log('BreadthFirst',BreadthFirst(one));
console.log('fizzBuzzTree',fizzBuzzTree(one));
console.log('SumofNumbersBT',SumofNumbersBT(one));
// console.log(BST);
// console.log(contains(BST.root, 6));


// function findMaxNumber(root) {
//     if (!root)
//     return false;
//     let max = root.value;
//     console.log('max --------',max);
    
//     let lres = findMaxNumber(root.left);
//     console.log('lres--------',lres);
//     let rres = findMaxNumber(root.right);
//     console.log('rres--------',rres);
//     if (lres > max){
//         console.log('left reespons-->',lres );
//         console.log('max left befor reespons-->',max );
//         max = lres;
//         console.log('max left after reespons-->',max );
//     }
        
//     if (rres > max)
//     {   console.log('right reespons-->',rres );
//     console.log('max left befor reespons-->',max );
//     max = rres;
//     console.log('right max reespons-->',max );
//     console.log('max left after reespons-->',max );


//     }
//     return max;
// }