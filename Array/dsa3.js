// Maximum and minimum of an array using minimum number of comparisons

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

function getMinMax(arr) {
  function mini(arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }

  function maxi(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

  return `${mini(arr)} ${maxi(arr)}  `;
}

console.log(getMinMax([1, 345, 234, 21, 56789]));
