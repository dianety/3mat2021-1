let trocas, pass, comps

function selectionSort(vetor, fnComp){

    trocas = 0, pass = 0, comps = 0
    
    function encontrarMenor(inicio){
        let menor = inicio 
        for(let j = inicio + 1; j < vetor.length; j++){
            // parâmetros passados em ordem inversa para fnComp
            if (fnComp(vetor[menor], vetor[j])){
                menor = j
            }
            comps++
        }
        return menor
    }
    
    // o vetor será percorrido da primeira até a PENÚLTIMA posição
    for(let i = 0; i < vetor.length -1; i++){
        pass++
        let menor = encontrarMenor(i+1)
        // parâmetros passados em ordem inversa para fnComp
        if (fnComp(vetor[i], vetor[menor])){
            [vetor[menor], vetor[i]] = [vetor[i], vetor[menor]]
            trocas++
        }
        comps++
    }
}

import {candidatos} from './includes/candidatos-2018.mjs'

// ordenar pelo nome de urna dos candidatos
console.log('Antes: ', candidatos)
console.time('Ordenando por nome de registro...')
selectionSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
console.timeEnd('Ordenando por nome de registro...')
console.log('Depois: ', candidatos)
console.log({trocas, comps, pass})