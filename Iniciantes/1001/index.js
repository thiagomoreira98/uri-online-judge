const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
const lines = input.split('\n');

let a = parseInt(lines[0]); 
let b = parseInt(lines[1]);

let result = a + b;
console.log(`X = ${result}`);