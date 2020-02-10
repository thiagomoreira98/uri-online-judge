const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
const lines = input.split('\n');

let nota1 = parseFloat(lines[0]).toFixed(1); 
let nota2 = parseFloat(lines[1]).toFixed(1);

let peso1 = 3.5;
let peso2 = 7.5;

const calcularMedia = (nota1, nota2) => {
  let media = ((nota1 * peso1) + (nota2 * peso2)) / (peso1 + peso2);
  return media.toFixed(5);
}

console.log(`MEDIA = ${calcularMedia(nota1, nota2)}`);