const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
const lines = input.split('\n');

let notaA = parseFloat(lines[0]).toFixed(1); 
let notaB = parseFloat(lines[1]).toFixed(1);
let notaC = parseFloat(lines[2]).toFixed(1);

let pesoA = 2;
let pesoB = 3;
let pesoC = 5;

const calcularMedia = (notaA, notaB, notaC) => {
  let media = ((notaA * pesoA) + (notaB * pesoB) + (notaC * pesoC)) / (pesoA + pesoB + pesoC);
  return media.toFixed(1);
}

console.log(`MEDIA = ${calcularMedia(notaA, notaB, notaC)}`);