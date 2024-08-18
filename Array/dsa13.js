//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let k = parseInt(readLine());
    let n = parseInt(readLine());
    let arr = new Array(n);
    let input_ar1 = readLine().split(' ').map(x => parseInt(x));
    for (let i = 0; i < n; i++)
      arr[i] = input_ar1[i];
    let obj = new Solution();
    console.log(obj.getMinDiff(arr, n, k));

  }
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
  //Function to get the minimum difference between the heights.
  getMinDiff(arr, n, k) {
    //your code here
    let ans = []
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] + k
      ans.push(arr[i])
    }
    ans.sort((a, b) => a - b)
    let numAns = ans[0] + ans[ans.lenght - 1]
    return numAns;
  }
}
