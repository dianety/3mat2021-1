/*
    SELECTION SORT

    Trata-se de uma otimização do bubble sort, diminuindo drasticamente
    o número de trocas necessárias para fazer a ordenação.

    Isola um dos valores do vetor e procura pelo menor valor entre os
    restantes, promovendo a troca caso o primeiro valor seja maior que
    o segundo.

*/

/*
    CURIOSIDADES

    - quantidade de passadas será qtde de itens do vetor -1

*/

let trocas, pass, comps

function selectionSort(vetor){

    trocas = 0, pass = 0, comps = 0
    
    function encontrarMenor(inicio){
        let menor = inicio 
        for(let j = inicio + 1; j < vetor.length; j++){
            if (vetor[j] < vetor[menor]){
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
        if (vetor[menor] < vetor[i]){
            [vetor[menor], vetor[i]] = [vetor[i], vetor[menor]]
            trocas++
        }
        comps++
    }
}

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

selectionSort(nums)
console.log(nums)
console.log({trocas, pass, comps})

import {nomes} from './includes/100-mil-nomes.mjs'

//console.log('Antes: ', nomes)
console.time('Ordenando nomes...')
selectionSort(nomes)
console.timeEnd('Ordenando nomes...')
console.log({trocas, comps, pass})
console.log('Depois: ', nomes)



