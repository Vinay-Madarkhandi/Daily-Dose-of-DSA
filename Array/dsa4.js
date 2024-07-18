// https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1
// Kth Smallest

function kthSmallest(arr, l, r, k) {
  //code here
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let num = arr[k - 1];
  return num;
}

console.log(kthSmallest([7, 10, 4, 3, 20, 15], 0, 5, 3));
