const numeros = [10, 28, 44, 78, 132]

let soma = 0
for (let i  = 0; i  < numeros.length; i ++) {
    const element = numeros[i ];

    soma+=element
    
}

const média = soma/numeros.length

console.log(média)