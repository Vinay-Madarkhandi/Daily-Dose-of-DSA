// https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1
// Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo

function sort012(arr, N) {
  //your code here
  arr = arr.sort((a, b) => a - b);
  return arr;
}
