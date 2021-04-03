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
        quickSort(vetor, ini, div - 1)

        // quicksort à direita
        quickSort(vetor, div + 1, fim)
    }
}