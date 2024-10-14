/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  let arr = [];

  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  map.forEach((val, key) => {
    if (val >= k) {
      arr.push(key);
    }
  });

  return arr;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
