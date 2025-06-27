



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

  const middle = Math.floor(array.length / 2); // Use floor for consistency
  const leftHalf = array.slice(0, middle);     // Non-modifying slice
  const rightHalf = array.slice(middle);      // Non-modifying slice

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

