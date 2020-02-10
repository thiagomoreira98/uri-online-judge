const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
const lines = input.split('\n');

let numeroFuncionario = parseInt(lines[0]); 
let horasTrabalhadas = parseInt(lines[1]);
let valorPorHora = parseFloat(lines[2]).toFixed(2);

const calculaSalario = (horas, valorPorHora) => {
  return (horas * valorPorHora).toFixed(2);
}

console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${calculaSalario(horasTrabalhadas, valorPorHora)}`);