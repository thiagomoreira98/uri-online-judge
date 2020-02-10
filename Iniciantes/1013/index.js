const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
const lines = input.split('\n');

// let lines = [
//   "217 14 6"
// ]

lines = lines[0].split(' ');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);

const getMaior = (a, b, c) => {
  let maiorAB = (a + b + Math.abs(a - b)) / 2;
  let maior = (maiorAB + c + Math.abs(maiorAB - c)) / 2;
  return maior;
}

console.log(`${getMaior(a, b, c)} eh o maior`);