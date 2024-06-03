const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]

const lista= [alunos,medias]

function exibeNomeENota(aluno) {

    if(lista[0].includes(aluno)) {

        const [alunos, medias] = lista
        const indice = lista[0].indexOf(aluno)
        const mediaALuno = lista[1][indice]

        console.log(`${alunos} tem a média ${medias} `)
        
    }

    else {
        console.log('Estudante não encontrado')
    }

}

exibeNomeENota('Caio')