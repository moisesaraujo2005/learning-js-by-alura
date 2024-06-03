const matriz = []
const linha1 = [1,2,3]
const linha2 = [4,5,6] 
const linha3 = [7,8,9]

matriz.push(linha1, linha2, linha3)




for(let i = 0; i<matriz.length; i++) {

    for(let coluna = 0; coluna<matriz[i].length; coluna++) {

        console.log(matriz[i][coluna])
       
    }
    console.log(matriz[1][2])

}

matriz[1].splice(2,2, 15)

console.log(matriz)