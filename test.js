// Write your logic here
function myLogic(input) {
  // Write your logic here and return it
  const result = input.replace(/[aeiouAEIOU]/g, "");
  return result;
}

process.stdin.resume();
process.stdin.setEncoding("utf8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (input) {
  inputString += input;
});

process.stdin.on("end", function () {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const input = readLine();
  const result = myLogic(input);
  process.stdout.write(result + "\n");
}
