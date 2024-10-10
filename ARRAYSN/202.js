/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set = new Set();
  while (n !== 1) {
    if (set.has(n)) {
      return false;
    }
    set.add(n);
    n = n
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Math.pow(parseInt(cur), 2), 0);
  }
  return true;
};
