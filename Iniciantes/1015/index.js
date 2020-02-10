const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
const lines = input.split('\n');

// let lines = [
//   "1.0 7.0",
//   "5.0 9.0"
// ]

let line1 = lines[0].split(' ');
let line2 = lines[1].split(' ');

let pontoX = {
  inicial: parseFloat(line1[0]),
  final: parseFloat(line2[0])
}

let pontoY = {
  inicial: parseFloat(line1[1]),
  final: parseFloat(line2[1])
}

const calcularDistancia = (x, y) => {
  let distancia = Math.pow((x.final - x.inicial), 2) + Math.pow((y.final - y.inicial), 2);
  return (Math.sqrt(distancia)).toFixed(4);
}

console.log(calcularDistancia(pontoX, pontoY));