/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map1 = new Map();
  const map2 = new Map();

  s = s.split("").sort();
  t = t.split("").sort();

  s.forEach((element) => {
    map1.set(element, (map1.get(element) || 0) + 1);
  });

  t.forEach((element) => {
    map2.set(element, (map2.get(element) || 0) + 1);
  });

  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) {
      return false;
    }
  }

  return true;
};
