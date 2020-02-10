const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
const lines = input.split('\n');

let a = parseInt(lines[0]); 
let b = parseInt(lines[1]);

let soma = a + b;
console.log(`SOMA = ${soma}`);