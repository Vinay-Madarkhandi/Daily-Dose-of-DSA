/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });
  const sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map((pair) => pair[0]);
};
