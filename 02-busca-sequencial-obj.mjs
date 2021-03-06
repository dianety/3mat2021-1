function buscaSequencial(vetor, fnComp) {
    // percurso com for tradicional
    for(let i = 0; i < vetor.length; i++){
        // encontrado o valor de busca, retorna-se a posição onde ele foi encontrado
        // fnComp representa a chamada à função externa
        if (fnComp(vetor[i])) return i
    }
    // retorna-se -1 caso o valor de busca não tenha sido encontrado
    return -1
}

// recebe apenas um objeto de nome e retorna true caso a propriedade first_name seja idêntica ao valor de busca
const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.time('Buscando ZILMAR')
console.log(buscaSequencial(objNomes, comparaNome, objNome => objNome.first_name === 'ZILMAR'))
console.timeEnd('Buscando ZILMAR')

console.time('Buscando KATIUSCIA')
console.log(buscaSequencial(objNomes, objNome => objNome.first_name === 'KATIUSCIA'))
console.timeEnd('Buscando KATIUSCIA')

console.time('Buscando nome ABRAAO')
let posEncontrado = buscaSequencial(objNomes, objNome => objNome.first_name === 'ABRAAO')
console.timeEnd('Buscando nome ABRAAO')

console.log(objNomes[posEncontrado]) // printa todos os resultados encontrados

console.time('Buscando group_name MARIA')
console.log(buscaSequencial(objNomes, obj => obj.group_name === 'MARIA'))
console.timeEnd('Buscando group_name MARIA')

