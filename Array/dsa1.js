// Kaden's Algorithm
// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sums = 0;
  let maxi = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sums = sums + nums[i];

    maxi = Math.max(maxi, sums);

    if (sums < 0) {
      sums = 0;
    }
  }
  return maxi;
};
