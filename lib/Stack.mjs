/*
    ESTRUTURA DE DADOS PILHA
    - pilha é uma lista linear de acesso restrito, que permite apenas as operações de
    inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out - 
    último a entrar, primeiro a sair).
    - a principal aplicação das pilhas são tarefas que envolvem a inversão de uma
    sequência de dados.
*/

export class Stack { // a palavra export permite que a classe seja importada depois em um outro arquivo

    #data

    constructor(){
        this.#data = [] // vetor vazio
    }

    // inserção
    push(valor){
        this.#data.push(valor)
    }

    // remoção
    pop(valor){
        return this.#data.pop()
    }

    // permite visualizar o conteúdo de #data fora da classe
    print(){
        return JSON.stringify(this.#data)
    }

    // PROPRIEDADE CALCULADA: retorna se a pilha está ou não vazia
    get empty(){
        return this.#data.length === 0
    }

    // dá uma "espiadinha" no topo da pilha (último elemento), mas sem retirá-lo
    peek(){
        return this.#data[this.#data.length - 1]
    }
}

let pilha = new Stack()

/*
pilha.push(5)
pilha.push(2)
pilha.push(9)
pilha.push(4)


console.log(pilha.print())
console.log(pilha.empty)
console.log('Peek', pilha.peek())
console.log('Pop', pilha.pop())
console.log('Peek', pilha.peek())
*/
