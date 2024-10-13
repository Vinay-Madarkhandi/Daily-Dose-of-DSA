const names = ["alice", "brad", "collin", "brad", "dylan", "kim"];

function getMoreThanTwoElements(names) {
  const map = new Map();
  const array = [];

  names.forEach((name) => {
    map.set(name, (map.get(name) || 0) + 1);
  });

  map.forEach((value, key) => {
    if (value >= 2) {
      return array.push(key);
    }
  });

  console.log(array);
  return map;
}

console.log(getMoreThanTwoElements(names));
