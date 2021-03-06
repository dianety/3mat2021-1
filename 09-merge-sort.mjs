/*
    MERGE SORT

    No processo de ordenação, esse algoritmo "desmonta" o valor original
    contendo N elementos até obter N vetores de apenas um elemento cada um.
    Em seguida, usando a técnica de mesclagem (merge), "remonta" o vator,
    dessa vez com os elementos já em ordem.

    - número de divisões e junções é padrão para um mesmo vetor (n - 1)

*/

let comps = 0, divisoes = 0, juncoes = 0

function mergeSort(vetor){
    
    function mesclar(vetEsq, vetDir){
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length){
            if(vetEsq[pEsq] < vetDir[pDir]){
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
            comps++
        }
        // verificando de qual lado houve sobra
        let sobra
        if (pEsq < pDir){
            sobra = vetEsq.slice(pEsq) // sobra à esquerda
        } else {
            sobra = vetDir.slice(pDir)             // sobra à direita
        }
        // o vetor retornado será formado pelo vetor resultado + sobra
        return [...vetRes, ...sobra] // concatenando os dois vetores

    }
    
    // desmontando o vetor
    if(vetor.length > 1) { // para desmontar, são necessários pelo menos 2 elementos
        let meio = Math.floor(vetor.length/2)
        // slice(): fatia um vetor, desde a posição inicial indicada (inclusive)
        // até a posição final (exclusive)
        let vetEsq = vetor.slice(0, meio)
        // quando o segundo parâmetro de slice() é omitido, são incluídos todos os elementos até o final
        let vetDir = vetor.slice(meio)
        divisoes++

        //console.log({vetEsq, vetDir})

        // chamadas recursivas à própria
        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)

        let vetFinal = mesclar(vetEsq, vetDir)
        juncoes++

        //console.log({vetFinal})

        return vetFinal
    }
    return vetor // condição de saída: vetor.length === 1
}

comps = 0, divisoes = 0, juncoes = 0
let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]

console.log(mergeSort(nums))
console.log({comps, divisoes, juncoes})

import {nomes} from './includes/100-mil-nomes.mjs'

//console.log('Antes: ', nomes)
comps = 0, divisoes = 0, juncoes = 0
console.time('Ordenando nomes...')
let nomesOrd = mergeSort(nomes)
console.timeEnd('Ordenando nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log({comps, divisoes, juncoes, memoria})
console.log('Depois: ', nomesOrd)