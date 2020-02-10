const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
const lines = input.split('\n');

let nome = lines[0];
let salario = parseFloat(lines[1]);
let totalVendas = parseFloat(lines[2]);
const COMISSAO = 0.15; // 15%

const calculaTotal = (salario, totalVendas) => {
  return ((totalVendas * COMISSAO) + salario).toFixed(2);
}

console.log(`TOTAL = R$ ${calculaTotal(salario, totalVendas)}`);
// console.log(`TOTAL = R$ ${calculaTotal(500.00, 1230.30)}`);