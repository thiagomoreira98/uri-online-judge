const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
const lines = input.split('\n');

let distanciaPercorrida = parseInt(lines[0]);
let combustivelGasto = parseFloat(lines[1]).toFixed(1);

const consumoMedio = (distanciaPercorrida, combustivelGasto) => {
  return (distanciaPercorrida / combustivelGasto).toFixed(3);
}

console.log(`${consumoMedio(distanciaPercorrida, combustivelGasto)} km/l`);