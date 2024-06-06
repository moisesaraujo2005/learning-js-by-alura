const numeros = [4, 10, 2, 47, 56, 100]

let menorNumero = numeros[0]
let maiorNumero = numeros[0]
for (let  i  = 0;  i  < numeros.length;  i ++) {
    const element = numeros[ i ];
    
    if(element< menorNumero) {
        menorNumero = element
    }

    if(element > maiorNumero) {
        maiorNumero =element
    }
}

console.log(`O menor número é ${menorNumero} e o maior número é o ${maiorNumero}`)