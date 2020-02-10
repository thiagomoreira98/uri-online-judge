const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
const lines = input.split('\n');

const PI = 3.14159;

const calcularArea = (raio) => {
  let result = PI * Math.pow(raio, 2);
  return result.toFixed(4);
}

console.log(`A=${calcularArea(lines[0])}`);