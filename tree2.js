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

     containBT(value) {
    
        let checkFun = (current, value) => {
            if (current.value == value) {
                return true
            } else {
    
                if (current.left) checkFun(current.left, value)
                if (current.right) checkFun(current.right, value)
            }
            return false
        };
        if (!this.root) {
            return false
        } else {
            checkFun(this.root, value);
           
        }
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
// another way to add value to BST
    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            return this.root = newNode;
        } else {
            let current = this.root;
            while (current) {
                if (value < current.value) {
                    if (!current.left) {
                        return current.left = newNode;
                    }
                    current = current.left;
                } else {
                    if (!current.right) {
                       return current.right = newNode;
                    }
                     current = current.right;
                }
            }
        }
    }


    containn(value) {
        if (value == this.root.value) {
            return true;
        } else {
            let current = this.root;
            while (current) {
                if (value < current.value) {

                    if (!current.left) {
                        return false
                    } else {
                        if (value == current.left.value)
                            return true
                    }
                    current = current.left
                } else {
                    if (!current.right) {
                        return false
                    } else {
                        if (value == current.right.value)
                            return true
                    }
                    current = current.right
                }
            }
        }
    }
}


/////// ✅ ✅  ✅ ✅4
function contains(root, value) {
    if (!root) {
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
let isSymmetric = function(root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);
};

const isMirror = function(leftSub, rightSub) {
    if (leftSub == null && rightSub == null) return true;
    if (leftSub == null || rightSub == null) return false;

    return (leftSub.val === rightSub.val 
            && isMirror(leftSub.left, rightSub.right) 
            && isMirror(leftSub.right, rightSub.left))
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
let tree = new BinaryTree(one)
// console.log(preOrder(one));
// console.log(inOrder(one));
// console.log(postOrder(one));
let BST = new BinarySearchTree();
BST.insert(5);
BST.insert(6);
BST.insert(3);
BST.insert(4);
BST.insert(10);
BST.insert(7);
BST.insert(8);
BST.insert(11);

// console.log('bst root', BST.root.right.right);
// add(BST, 4);
// BST.add(2);
// BST.add(5);
// BST.add(9);

console.log('max',findMaxNumber(one));
// console.log('min',findMinNumber(one));
// console.log('BreadthFirst',BreadthFirst(one));
// console.log('fizzBuzzTree',fizzBuzzTree(one));
// console.log('ifContains',ifContains(BST.root ,9));
// console.log('ifContains',ifContains(one,9));
// console.log('containsBT',tree.containBT(3));
// console.log('ifContainsBST',ifContainsBT(BST.root,11));
// console.log('SumofNumbersBT',SumofNumbersBT(one));
// console.log('printZigZagTraversal',printZigZagTraversal(one));
// console.log('addBT------' , addBT(one));
// console.log(BST);
// console.log(BST.containn(6));
// console.log(BST.containn(1));








// -----------------------------------------------------------------------------

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

// function BreadthFirst  (root) {
//     const result = [];
//     const q = [root];
//     let switching = false;
//     let cur ;
//     if(root){
//         while (q.length > 0) {
//        console.log('----',q.length);
//           if(switching)  {
//             cur = q.shift()
//             result.push(cur.value)
//             switching = false;
//             if (cur.left){
//                 q.push(cur.left)
                
//             }
//             if (cur.right){
//                 q.push(cur.right)
                
//             }
//           }
//         else { 
//             cur = q.shift()
//             result.push(cur.value)
//             switching = true;
//             if (cur.right){
//                 q.push(cur.left)
                
//             }
//             if (cur.left){
//                 q.push(cur.right)
                
//             }
//         }
    
//         };
//         return result

//     }
//     else return 'Sorry there is no root';
// }