/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let str = digits.toString().replace(/,/g, "");
  str = parseInt(str);
  str = str.toString();
  str = str.split("");
  let ans = str.map(Number);
  return str;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
