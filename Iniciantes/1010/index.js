// const input = require('fs').readFileSync('/dev/stdin', 'utf8'); 
// const lines = input.split('\n');

// let lines1 = [
//   "12 1 5.30",
//   "16 2 5.10"
// ]

// let lines2 = [
//   "13 2 15.30",
//   "161 4 5.20"
// ]

let lines3 = [
  "1 1 15.10",
  "2 1 15.10"
]

const getPecas = (lines) => {
  return lines.map((line) => {

    let peca = line.split(' ');

    return {
      codigo: parseInt(peca[0]),
      quantidade: parseInt(peca[1]),
      valorUnitario: parseFloat(peca[2])
    };
  });
}

let pecas = getPecas(lines3);

const calculaTotalPeca = (quantidade, valorUnitario) => {
  return quantidade * valorUnitario;
}

let total = pecas.reduce((accumulator, { quantidade, valorUnitario }) => {
  return accumulator + calculaTotalPeca(quantidade, valorUnitario)
}, 0);

total = parseFloat(total).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${total}`);