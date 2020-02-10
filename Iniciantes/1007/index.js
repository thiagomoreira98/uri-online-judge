const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
const lines = input.split('\n');

let a = parseInt(lines[0]); 
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);
let d = parseInt(lines[3]);

const result = (a * b) - (c * d);

console.log(`DIFERENCA = ${result}`);