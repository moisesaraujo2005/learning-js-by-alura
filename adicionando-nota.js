const notas = [10, 6, 8]

notas.push(7)

const media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length;


let mediaFor = 0
for (let index = 0; index < notas.length; index++) {
    const element = notas[index];
    mediaFor+= element/notas.length
    
}
console.log(`Media pelo metódo sem for ${media}`)
console.log(`Media pelo metódo com for ${mediaFor}`)

