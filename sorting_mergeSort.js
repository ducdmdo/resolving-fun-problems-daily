function merge(array1, array2) {
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }
  return combined;
}


function mergeSort(array) {
  //base case
  if (array.length === 1) return array;

  let midIndex =  Math.floor(array.length / 2);

  //recursive case
  let left = mergeSort(array.slice(0, midIndex));
  let right = mergeSort(array.slice(midIndex));

  return merge(left, right);
}

let originalArray = [3, 1, 4, 2];

let sortedArray = mergeSort(originalArray);
console.log(sortedArray);
