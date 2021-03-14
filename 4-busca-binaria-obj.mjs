let comps = 0 // número de comparações

function buscaBinaria(vetor, fnComp){
    comps = 0
    let ini = 0
    let fim = vetor.length - 1
    let meio
    while (fim >= ini){
        meio = Math.floor((fim+ini)/2) // Math.floor() arredonda para baixo
        if(fnComp(vetor[meio]) === 0){
            comps++
            return meio // achou
        }
        else if(fnComp(vetor[meio]) < 0){
            comps += 2
            fim = meio -1
        }
        else{
            comps += 2
            ini = meio +1
        }
    }
    return -1 // valor de busca não existe no vetor
}

// retornos da arrow function para busca binária
// 0: igualdade
// -1: o valor de busca é MENOR que o valor do objeto comparado
// 1: o valor de busca é MAIOR que o valor do objeto comparado

const comparaNomeBin = obj =>{
    if(obj.first_name === 'FAUSTO')
        return 0
    else if('FAUSTO' < obj.first_name)
        return -1
    else
        return 1
}

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.time('Buscando ZILMAR')
console.log(buscaBinaria(objNomes, obj => {
    const valorBusca = 'ZILMAR'
    if(obj.first_name === valorBusca)
        return 0
    else if(valorBusca < obj.first_name)
        return -1
    else
        return 0
    }), {comps})
console.timeEnd('Buscando ZILMAR')

console.time('Buscando KATIUSCIA')
console.log(buscaBinaria(objNomes, obj => {
    const valorBusca = 'KATIUSCIA'
    if(obj.first_name === valorBusca)
        return 0
    else if(valorBusca < obj.first_name)
        return -1
    else
        return 0
    }), {comps})
console.timeEnd('Buscando KATIUSCIA')

console.time('Buscando nome ABRAAO')
let posEncontrado = buscaBinaria(objNomes, obj => {
    const valorBusca = 'ABRAAO'
    if(obj.first_name === valorBusca)
        return 0
    else if(valorBusca < obj.first_name)
        return -1
    else
        return 0
    })
console.timeEnd('Buscando nome ABRAAO')

console.log(objNomes[posEncontrado], {comps}) // printa todos os resultados encontrados

console.time('Buscando group_name MARIA')
console.log(buscaBinaria(objNomes, obj => {
    const valorBusca = 'MARIA'
    if(obj.group_name === valorBusca)
        return 0
    else if(valorBusca < obj.group_name)
        return -1
    else
        return 0
    }), {comps})
console.timeEnd('Buscando group_name MARIA')