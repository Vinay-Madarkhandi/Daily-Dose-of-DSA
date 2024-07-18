// https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1
// Rotate Array by One

// function rotate(arr) {
//   // code here
//   arr = arr.pop();
//   let temp = arr;

//   return temp;
// }

// console.log(rotate([9, 8, 7, 6, 4, 2, 1, 3]));

let arr = [9, 8, 7, 6, 4, 2, 1, 3];
let n = arr.length - 1;
let temp = [];
temp = arr.pop();

let ans = temp.concat(arr);

console.log(temp);
console.log(n);
console.log(arr);
console.log(ans);
