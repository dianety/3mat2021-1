
let comps = 0, divisoes = 0, juncoes = 0

function mergeSort(vetor, fnComp){
    
    function mesclar(vetEsq, vetDir){
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length){
            if(fnComp(vetDir[pDir],vetEsq[pEsq])){
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
        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp)

        let vetFinal = mesclar(vetEsq, vetDir)
        juncoes++

        //console.log({vetFinal})

        return vetFinal
    }
    return vetor // condição de saída: vetor.length === 1
}


import {candidatos} from './includes/candidatos-2018.mjs'

// ordenar pelo nome de urna dos candidatos
comps = 0, divisoes = 0, juncoes = 0
console.log('Antes: ', candidatos)
console.time('Ordenando por nome de registro...')
let candidatosOrd = mergeSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO)
console.timeEnd('Ordenando por nome de registro...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log({comps, divisoes, juncoes, memoria})
console.log('Depois: ', candidatosOrd)
