const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
const lines = input.split('\n');

const raio = parseFloat(lines[0]);
const PI = 3.14159;

const calculaVolume = (raio) => {
  return (((4 / 3) * PI * Math.pow(raio, 3))).toFixed(3);
}

console.log(`VOLUME = ${calculaVolume(raio)}`);