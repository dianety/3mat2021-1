// pilha de pratos. last in, first out
// uma das aplicações da pilha é justamente inverter vetores

import {Stack} from './lib/Stack2.mjs'

const texto = "Socorram-me, subi no ônibus em Marrocos"

// usando um vetor como pilha
const pilha = new Stack()

// desmontando o texto e colocando cada letra na pilha
for (let i = 0; i < texto.length; i++){
    // na pilha, a inserção sempre ocorre no final
    pilha.push(texto.charAt(i))
}

console.log(pilha.print())

let textoReverso = ''

while(! pilha.empty) {
    // na pilha, a retirada sempre é feita também no final
    textoReverso += pilha.pop()
}

console.log(textoReverso)