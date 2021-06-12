let comps, trocas, passadas

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1){
    if(fim > ini) { // deve ter mais que um elemento para ordenar
        passadas++
        let pivot = fim
        let div = ini - 1
        // for indo do primeiro elemento até o penúltimo
        for(let i = ini; i < fim; i++){
            if(fnComp(vetor[pivot], vetor[i])){ // parâmetros invertidos
                div++
                [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ]
                trocas++
            }
            comps++
        }
        div++
        // colocando o pivot em seu lugar definitivo
        if(fnComp(vetor[div], vetor[pivot])){ // parâmetros invertidos
            [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ]
            trocas++
        }
        comps++

        // quicksort à esquerda
        quickSort(vetor, fnComp, ini, div - 1)

        // quicksort à direita
        quickSort(vetor, fnComp, div + 1, fim)
    }
}

import {candidatos} from './includes/candidatos-2018.mjs'

// ordenar pelo nome de urna dos candidatos
trocas = 0, comps = 0, passadas = 0
//console.log('Antes: ', candidatos)
console.time('Ordenando por nome de registro...')
//quickSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO)

// Função de comparação considerando múltiplos níveis de ordenação:
// primeiro por SG_UE, depois por DS_CARGO e, por fim, por NR_CANDIDATO
quickSort(candidatos, (a, b) => {
    if(a.SG_UE === b.SG_UE){
        if(a.DS_CARGO == b.DS_CARGO){
            return a.NR_CANDIDATO > b.NR_CANDIDATO
        } else {
            return a.DS_CARGO > b.DS_CARGO
        }
    } else {
        return a.SG_UE > b.SG_UE
    }
})
console.timeEnd('Ordenando por nome de registro...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Depois: ', candidatos)
console.log({trocas, comps, passadas, memoria})