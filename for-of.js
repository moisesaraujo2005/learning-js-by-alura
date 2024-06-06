const notas = [10, 6.5, 8, 7.5];

let somaNotas = []

for(let nota of notas) {
    somaNotas+=nota
}

const média = somaNotas/notas.length

console.log(média)