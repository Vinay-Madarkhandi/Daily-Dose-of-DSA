class HashMap {
  constructor() {
    this.data = {};
  }
  set(key, value) {
    this.data[key] = value;
  }
  get(key) {
    return this.data[key];
  }
  has(key) {
    return key in this.data;
  }
  delete(key) {
    delete this.data[key];
  }
  clear() {
    this.data = {};
  }
  get size() {
    return Object.keys(this.data).length;
  }
  get keys() {
    return Object.keys(this.data);
  }
  get values() {
    return Object.values(this.data);
  }
  get entries() {
    return Object.entries(this.data);
  }
}

let map = new HashMap();

let arr = [
  "alice",
  "bob",
  "charlie",
  "david",
  "alice",
  "charlie",
  "bob",
  "alice",
  "alice",
  "alice",
];

arr.forEach((ele) => {
  map.set(ele, (map.get(ele) || 0) + 1);
});

let num = 10;

console.log(num);

console.log(map);
console.log(map.size);
