// pilha de pratos. first in, first out
// uma das aplicações da pilha é justamente inverter vetores

const texto = "Socorram-me, subi no ônibus em Marrocos"

// usando um vetor como pilha
const pilha = []

// desmontando o texto e colocando cada letra na pilha
for (let i = 0; i < texto.length; i++){
    // na pilha, a inserção sempre ocorre no final
    pilha.push(texto.charAt(i))
}

console.log(pilha)

let textoReverso = ''

while(pilha.length) {
    // na pilha, a retirada sempre é feita também no final
    textoReverso += pilha.pop()
}

console.log(textoReverso)