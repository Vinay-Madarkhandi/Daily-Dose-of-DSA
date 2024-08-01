process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function sumMultiplesOf(k, n) {
  let m = Math.floor((n - 1) / k);
  return (k * m * (m + 1)) / 2;
}

function main() {
  var t = parseInt(readLine());
  let results = [];
  for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readLine());
    let sum3 = sumMultiplesOf(3, n);
    let sum5 = sumMultiplesOf(5, n);
    let sum15 = sumMultiplesOf(15, n);
    let result = sum3 + sum5 - sum15;
    results.push(result);
  }
  console.log(results.join("\n"));
}
