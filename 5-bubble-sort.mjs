/*
    ALGORITMO DE ORDENAÇÃO BUBBLE SORT

    Percorre o vetor, comparando um elemento com seu sucessor. Caso o sucessor seja menor que
    o valor atual, ocorre a troca entre eles. Esse processo se repete em várias passadas até
    que, no percurso final, nenhuma troca seja feita.

*/
let totTrocas, comps, pass

function bubbleSort(vetor){
    totTrocas = 0, comps = 0, pass = 0
    let trocas
    do{
        trocas = 0 // início de uma nova passada
        pass++
        // percurso do vetor do início até o PENÚLTIMO elemento
        for(let i=0; i<vetor.length-1; i++){
            if(vetor[i] > vetor[i+1]){
                // troca direta em Javascript usando desestruturação de vetores (opção sem usar auxiliar)
                [vetor[i], vetor [i+1]] = [vetor[i+1], vetor[i]]

                trocas++
            }
            comps++
        }
        totTrocas += trocas
    } while (trocas>0)
}

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3] // pior caso possível: vetor totalmente invertido

console.log('Antes: ', nums)
bubbleSort(nums)
console.log('Depois: ', nums)
console.log({totTrocas, comps, pass}) // quando coloca o nome da variável dentro de chaves, o nome delas aparece

import {empresas} from './includes/15-mil-empresas.mjs'

console.log('Antes: ', empresas)
console.time('Ordenando empresas...')
bubbleSort(empresas)
console.timeEnd('Ordenando empresas...')
console.log({totTrocas, comps, pass})
console.log('Depois: ', empresas)