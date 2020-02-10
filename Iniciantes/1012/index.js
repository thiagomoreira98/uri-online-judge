const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
const lines = input.split('\n');

// let lines = [
//   "3.0 4.0 5.2"
// ]

lines = lines[0].split(' ');

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);

const PI = 3.14159;

const calcularArea = {
  triangulo: (base, altura) => {
    return ((base * altura) / 2).toFixed(3);
  },
  circulo: (raio) => {
    return (PI * Math.pow(raio, 2)).toFixed(3)
  },
  trapezio: (baseMaior, baseMenor, altura) => {
    return ((((baseMaior + baseMenor) * altura) / 2)).toFixed(3);
  },
  quadrado: (lado) => {
    return (Math.pow(lado, 2)).toFixed(3);
  },
  retangulo: (comprimento, altura) => {
    return (comprimento * altura).toFixed(3);
  }
}

console.log(`TRIANGULO: ${calcularArea.triangulo(a, c)}`);
console.log(`CIRCULO: ${calcularArea.circulo(c)}`);
console.log(`TRAPEZIO: ${calcularArea.trapezio(a, b, c)}`);
console.log(`QUADRADO: ${calcularArea.quadrado(b)}`);
console.log(`RETANGULO: ${calcularArea.retangulo(a, b)}`);