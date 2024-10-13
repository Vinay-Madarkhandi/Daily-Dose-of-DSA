/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map();
  let resutls = false;

  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  map.forEach((val) => {
    if (val >= 2) {
      resutls = true;
    }
  });

  return resutls;
};

let nums1 = [1, 2, 3, 1];
let nums2 = [1, 2, 3, 4];
console.log(containsDuplicate(nums1));

console.log(containsDuplicate(nums2));
