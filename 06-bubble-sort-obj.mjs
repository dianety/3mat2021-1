let totTrocas, comps, pass

function bubbleSort(vetor, fnComp){
    totTrocas = 0, comps = 0, pass = 0
    let trocas
    do{
        trocas = 0 // início de uma nova passada
        pass++
        // percurso do vetor do início até o PENÚLTIMO elemento
        for(let i=0; i< vetor.length-1; i++){
            if(fnComp(vetor[i], vetor[i+1])){
                // troca direta em Javascript usando desestruturação de vetores (opção sem usar auxiliar)
                [vetor[i], vetor [i+1]] = [vetor[i+1], vetor[i]]

                trocas++
            }
            comps++
        }
        totTrocas += trocas
    } while (trocas>0)
}

// a função de comparação precisa retornar
// true -> se o primeiro for maior que o segundo
// false -> caso contrário

import {candidatos} from './includes/candidatos-2018.mjs'

// ordenar pelo nome de urna dos candidatos
console.log('Antes: ', candidatos)
console.time('Ordenando por nome de registro...')
bubbleSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
console.timeEnd('Ordenando por nome de registro...')
console.log('Depois: ', candidatos)
console.log({totTrocas, comps, pass})
