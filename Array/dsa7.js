// https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1
// Union of two arrays

function doUnion(arr1, arr2) {
  // code here
  arr1 = arr1.concat(arr2);

  let uniqueArray = arr1.filter((item, index) => arr1.indexOf(item) === index);

  let n = uniqueArray.length;

  return n;
}

console.log(doUnion([85, 25, 1, 32, 54, 6], [85, 2]));
