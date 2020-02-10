const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
const lines = input.split('\n');

let distancia = parseInt(lines[0]);

const velocidadeCarroX = 60;
const velocidadeCarroY = 90;

// 1km para cada 2min

console.log(`${distancia * 2} minutos`);