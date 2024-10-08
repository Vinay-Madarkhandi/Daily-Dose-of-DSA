
  let arr = nums1;
  arr = arr.concat(nums2);
  arr = arr.sort((a, b) => a - b);
  let num1 = nums1[nums1.length - 1];
  let num2 = nums2[0];
  let ans = 0;
  if (arr.length % 2 === 0) {
    ans = num1 + num2;
    return (ans = ans / 2);
  }
  if (arr.length % 2 != 0) {
    return (ans = arr[arr.length / 2]);
  }
  console.log(num1);
  console.log(num2);
  console.log(arr);
  console.log(ans);

let 
nums1= [1, 2]
let nums2=  [3, 4]);
