const notas = [10, 6.5, 8, 7.5];

let soma =0


for (let   i= 0;  i < notas.length; i ++) {
    const element = notas[i];
    soma+=element
}

const média = soma/notas.length
console.log(`A média das notas é ${média}`)