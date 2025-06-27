class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right =  null;
  }
}

class Tree {
  constructor(array) {
    array = mergeSort(removeRepeatedItems(array)); // Get rid of repeated items and ordering
    let center = Math.floor(array.length/2)
    let root = new Node(array[center]);
    if (center > 0) {
      root.left =new Tree(array.slice(0,center));
    }
    if (center<array.length) {
    root.right =new Tree(array.slice(center+1,array.length));
      
    }
    return root;
  }
}




// Trim the array for not repeated elements and more easy handling 
function removeRepeatedItems(array) {
  let alreadyUsed = []

  for (let i = 0; i < array.length; i++) {
    if (alreadyUsed.includes(array[i])) {
      continue
    }else{
      alreadyUsed.push(array[i]);
    }
    
  }
  return alreadyUsed;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);     
  const rightHalf = array.slice(middle);     

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return orderOrderedArrays(sortedLeft, sortedRight);
}

function orderOrderedArrays(array1, array2) {
  let index1 = 0
  let index2= 0
  let orderedArraysOrdered = []
  while (index1<array1.length && index2< array2.length) {
    if (array1[index1]<array2[index2]) {
      orderedArraysOrdered.push(array1[index1]);
      index1 += 1;
    }else{
      orderedArraysOrdered.push(array2[index2])
      index2 +=1;
    }
  }
  if (index1== array1.length) {
    orderedArraysOrdered.push(...array2.splice(index2,array2.length-index2))
  }else{
    orderedArraysOrdered.push(...array1.splice(index1,array1.length-index1))
  }
  return orderedArraysOrdered
}


const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};
